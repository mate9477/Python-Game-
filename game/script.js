// Game state management
let gameState = {
    currentLevel: null,
    currentQuestionIndex: 0,
    questions: [],
    score: 0,
    correctAnswers: 0,
    hintsUsed: 0,
    selectedAnswer: null,
    isAnswerSubmitted: false
};

// Progress management
class ProgressManager {
    constructor() {
        this.loadProgress();
    }

    loadProgress() {
        const savedProgress = localStorage.getItem('pythonGameProgress');
        if (savedProgress) {
            this.progress = JSON.parse(savedProgress);
        } else {
            this.progress = {
                totalScore: 0,
                levelsCompleted: 0,
                totalQuestions: 0,
                totalCorrect: 0,
                levelScores: {
                    beginner: null,
                    intermediate: null,
                    advanced: null
                }
            };
        }
    }

    saveProgress() {
        localStorage.setItem('pythonGameProgress', JSON.stringify(this.progress));
    }

    updateLevelScore(level, score, correct, total) {
        this.progress.levelScores[level] = {
            score: score,
            correct: correct,
            total: total,
            accuracy: Math.round((correct / total) * 100)
        };
        
        if (!this.progress.levelScores[level].completed) {
            this.progress.levelsCompleted++;
            this.progress.levelScores[level].completed = true;
        }
        
        this.progress.totalScore += score;
        this.progress.totalCorrect += correct;
        this.progress.totalQuestions += total;
        
        this.saveProgress();
    }

    getOverallAccuracy() {
        if (this.progress.totalQuestions === 0) return 0;
        return Math.round((this.progress.totalCorrect / this.progress.totalQuestions) * 100);
    }
}

const progressManager = new ProgressManager();

// Screen management functions
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function showStartScreen() {
    showScreen('startScreen');
}

function showDifficultySelection() {
    showScreen('difficultyScreen');
}

function showInstructions() {
    showScreen('instructionsScreen');
}

function showProgress() {
    updateProgressDisplay();
    showScreen('progressScreen');
}

function updateProgressDisplay() {
    const progress = progressManager.progress;
    
    document.getElementById('totalScore').textContent = progress.totalScore;
    document.getElementById('levelsCompleted').textContent = progress.levelsCompleted;
    document.getElementById('accuracy').textContent = progressManager.getOverallAccuracy() + '%';
    
    // Update level scores
    const levelNames = ['beginner', 'intermediate', 'advanced'];
    const levelEmojis = ['🌱', '🔥', '⚡'];
    
    levelNames.forEach((level, index) => {
        const scoreElement = document.getElementById(level + 'Score');
        const levelData = progress.levelScores[level];
        
        if (levelData) {
            scoreElement.textContent = `${levelData.score} pts (${levelData.accuracy}% accuracy)`;
        } else {
            scoreElement.textContent = 'Not played';
        }
    });
}

// Game functions
function startGame(difficulty) {
    gameState.currentLevel = difficulty;
    gameState.questions = shuffleArray([...questionDatabase[difficulty]]);
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.correctAnswers = 0;
    gameState.hintsUsed = 0;
    gameState.selectedAnswer = null;
    gameState.isAnswerSubmitted = false;
    
    updateGameHeader();
    displayQuestion();
    showScreen('gameScreen');
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function updateGameHeader() {
    const levelNames = {
        beginner: '🌱 Beginner',
        intermediate: '🔥 Intermediate',
        advanced: '⚡ Advanced'
    };
    
    document.getElementById('currentLevel').textContent = levelNames[gameState.currentLevel];
    document.getElementById('currentQuestion').textContent = gameState.currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = gameState.questions.length;
    document.getElementById('gameScore').textContent = gameState.score;
    
    // Update progress bar
    const progress = ((gameState.currentQuestionIndex) / gameState.questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

function displayQuestion() {
    if (gameState.currentQuestionIndex >= gameState.questions.length) {
        showResults();
        return;
    }

    const question = gameState.questions[gameState.currentQuestionIndex];
    gameState.selectedAnswer = null;
    gameState.isAnswerSubmitted = false;
    
    // Reset UI elements
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('answerOptions').innerHTML = '';
    document.getElementById('inputContainer').style.display = 'none';
    document.getElementById('codeBlock').style.display = 'none';
    document.getElementById('hintText').style.display = 'none';
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('submitBtn').disabled = false;
    document.getElementById('hintBtn').disabled = false;
    
    // Show code block if present
    if (question.code) {
        document.getElementById('codeBlock').style.display = 'block';
        document.getElementById('codeBlock').textContent = question.code;
    }
    
    // Display question based on type
    switch (question.type) {
        case 'multiple-choice':
        case 'predict-output':
            displayMultipleChoice(question);
            break;
        case 'fill-blank':
        case 'debug':
            displayFillBlank(question);
            break;
    }
    
    updateGameHeader();
}

function displayMultipleChoice(question) {
    const optionsContainer = document.getElementById('answerOptions');
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => selectOption(index);
        button.dataset.index = index;
        optionsContainer.appendChild(button);
    });
}

function displayFillBlank(question) {
    document.getElementById('inputContainer').style.display = 'block';
    document.getElementById('answerInput').value = '';
    document.getElementById('answerInput').focus();
    
    // Allow Enter key to submit
    document.getElementById('answerInput').onkeypress = (e) => {
        if (e.key === 'Enter') {
            submitAnswer();
        }
    };
}

function selectOption(index) {
    if (gameState.isAnswerSubmitted) return;
    
    // Remove previous selection
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selection to clicked option
    document.querySelector(`[data-index="${index}"]`).classList.add('selected');
    gameState.selectedAnswer = index;
}

function showHint() {
    const question = gameState.questions[gameState.currentQuestionIndex];
    document.getElementById('hintText').style.display = 'block';
    document.getElementById('hintText').textContent = `💡 Hint: ${question.hint}`;
    document.getElementById('hintBtn').disabled = true;
    
    // Deduct points for hint
    gameState.score = Math.max(0, gameState.score - 3);
    gameState.hintsUsed++;
    updateGameHeader();
}

function submitAnswer() {
    if (gameState.isAnswerSubmitted) {
        nextQuestion();
        return;
    }
    
    const question = gameState.questions[gameState.currentQuestionIndex];
    let userAnswer = null;
    let isCorrect = false;
    
    // Get user answer based on question type
    if (question.type === 'multiple-choice' || question.type === 'predict-output') {
        userAnswer = gameState.selectedAnswer;
        if (userAnswer === null) {
            alert('Please select an answer first!');
            return;
        }
        isCorrect = userAnswer === question.correct;
    } else if (question.type === 'fill-blank' || question.type === 'debug') {
        userAnswer = document.getElementById('answerInput').value.trim();
        if (!userAnswer) {
            alert('Please enter an answer first!');
            return;
        }
        
        // Normalize answers for comparison
        const normalizedUser = userAnswer.toLowerCase().replace(/\s+/g, ' ');
        const normalizedCorrect = question.correct.toLowerCase().replace(/\s+/g, ' ');
        isCorrect = normalizedUser === normalizedCorrect;
    }
    
    gameState.isAnswerSubmitted = true;
    
    // Update score
    if (isCorrect) {
        gameState.score += 10;
        gameState.correctAnswers++;
    } else {
        gameState.score = Math.max(0, gameState.score - 2);
    }
    
    // Show feedback
    showFeedback(isCorrect, question);
    
    // Change submit button to next
    document.getElementById('submitBtn').textContent = 'Next Question';
    document.getElementById('submitBtn').disabled = false;
    
    // Disable interactions
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
    });
    document.getElementById('answerInput').disabled = true;
    
    updateGameHeader();
    
    // Show animated feedback
    showAnimatedFeedback(isCorrect);
}

function showFeedback(isCorrect, question) {
    const feedback = document.getElementById('feedback');
    feedback.style.display = 'block';
    
    if (isCorrect) {
        feedback.className = 'feedback correct';
        feedback.textContent = '🎉 Correct! Well done!';
        
        // Highlight correct option if multiple choice
        if (question.type === 'multiple-choice' || question.type === 'predict-output') {
            document.querySelector(`[data-index="${question.correct}"]`).classList.add('correct');
        }
    } else {
        feedback.className = 'feedback incorrect';
        feedback.textContent = `❌ Incorrect. The correct answer is: ${getCorrectAnswerText(question)}`;
        
        // Highlight correct and incorrect options
        if (question.type === 'multiple-choice' || question.type === 'predict-output') {
            document.querySelector(`[data-index="${question.correct}"]`).classList.add('correct');
            if (gameState.selectedAnswer !== null) {
                document.querySelector(`[data-index="${gameState.selectedAnswer}"]`).classList.add('incorrect');
            }
        }
    }
}

function getCorrectAnswerText(question) {
    if (question.type === 'multiple-choice' || question.type === 'predict-output') {
        return question.options[question.correct];
    } else {
        return question.correct;
    }
}

function showAnimatedFeedback(isCorrect) {
    const animation = document.getElementById('feedbackAnimation');
    const icon = animation.querySelector('.animation-icon');
    
    if (isCorrect) {
        icon.textContent = '✅';
    } else {
        icon.textContent = '❌';
    }
    
    animation.classList.add('show');
    
    setTimeout(() => {
        animation.classList.remove('show');
    }, 1000);
}

function nextQuestion() {
    gameState.currentQuestionIndex++;
    
    // Reset submit button
    document.getElementById('submitBtn').textContent = 'Submit Answer';
    
    // Re-enable input
    document.getElementById('answerInput').disabled = false;
    
    displayQuestion();
}

function showResults() {
    // Add completion bonus
    const completionBonus = 20;
    gameState.score += completionBonus;
    
    // Update progress
    progressManager.updateLevelScore(
        gameState.currentLevel,
        gameState.score,
        gameState.correctAnswers,
        gameState.questions.length
    );
    
    // Display results
    document.getElementById('resultsTitle').textContent = `${gameState.currentLevel.charAt(0).toUpperCase() + gameState.currentLevel.slice(1)} Level Complete!`;
    document.getElementById('finalScore').textContent = gameState.score;
    document.getElementById('correctAnswers').textContent = `${gameState.correctAnswers}/${gameState.questions.length}`;
    document.getElementById('finalAccuracy').textContent = Math.round((gameState.correctAnswers / gameState.questions.length) * 100) + '%';
    
    showScreen('resultsScreen');
}

function replayLevel() {
    startGame(gameState.currentLevel);
}

// Initialize the game when page loads
document.addEventListener('DOMContentLoaded', function() {
    showStartScreen();
    
    // Prevent form submission on Enter in input fields
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
            e.preventDefault();
        }
    });
});