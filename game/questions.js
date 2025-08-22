// Question database organized by difficulty level
const questionDatabase = {
    beginner: [
        {
            id: 1,
            type: 'multiple-choice',
            question: 'What is the correct way to create a variable in Python?',
            code: null,
            options: [
                'var x = 5',
                'x = 5',
                'int x = 5',
                'let x = 5'
            ],
            correct: 1,
            hint: 'In Python, you simply assign a value to a variable name without declaring its type.'
        },
        {
            id: 2,
            type: 'multiple-choice',
            question: 'Which of the following is used to add comments in Python?',
            code: null,
            options: [
                '//',
                '/* */',
                '#',
                '--'
            ],
            correct: 2,
            hint: 'Python uses a symbol that looks like a hash or number sign.'
        },
        {
            id: 3,
            type: 'fill-blank',
            question: 'Complete the code to print "Hello World"',
            code: '___("Hello World")',
            correct: 'print',
            hint: 'This is the most basic function used to display output in Python.'
        },
        {
            id: 4,
            type: 'predict-output',
            question: 'What will be the output of this code?',
            code: 'x = 10\ny = 20\nprint(x + y)',
            options: [
                '30',
                '1020',
                '10 + 20',
                'Error'
            ],
            correct: 0,
            hint: 'Both x and y are integers, so the + operator performs arithmetic addition.'
        },
        {
            id: 5,
            type: 'multiple-choice',
            question: 'Which data type is used to store text in Python?',
            code: null,
            options: [
                'int',
                'float',
                'str',
                'char'
            ],
            correct: 2,
            hint: 'This data type is short for "string".'
        },
        {
            id: 6,
            type: 'debug',
            question: 'Fix the syntax error in this code:',
            code: 'if x = 5:\n    print("x is 5")',
            correct: 'if x == 5:\n    print("x is 5")',
            hint: 'For comparison, you need to use double equals, not single equals.'
        },
        {
            id: 7,
            type: 'multiple-choice',
            question: 'What is the result of 7 // 2 in Python?',
            code: null,
            options: [
                '3.5',
                '3',
                '4',
                '2'
            ],
            correct: 1,
            hint: 'The // operator performs floor division, which returns the integer part of the division.'
        },
        {
            id: 8,
            type: 'fill-blank',
            question: 'Complete the code to create a list:',
            code: 'my_list = ___1, 2, 3, 4___',
            correct: '[',
            hint: 'Lists in Python are enclosed in square brackets.'
        },
        {
            id: 9,
            type: 'predict-output',
            question: 'What will this code output?',
            code: 'name = "Python"\nprint(name[0])',
            options: [
                'Python',
                'P',
                'n',
                'Error'
            ],
            correct: 1,
            hint: 'String indexing in Python starts at 0, so [0] gets the first character.'
        },
        {
            id: 10,
            type: 'multiple-choice',
            question: 'Which operator is used for exponentiation in Python?',
            code: null,
            options: [
                '^',
                '**',
                'pow',
                'exp'
            ],
            correct: 1,
            hint: 'This operator consists of two asterisks.'
        },
        {
            id: 11,
            type: 'fill-blank',
            question: 'Complete the if statement:',
            code: '___ age >= 18:\n    print("Adult")',
            correct: 'if',
            hint: 'This keyword is used to start conditional statements.'
        },
        {
            id: 12,
            type: 'predict-output',
            question: 'What will be printed?',
            code: 'fruits = ["apple", "banana"]\nprint(len(fruits))',
            options: [
                'apple',
                'banana',
                '2',
                'Error'
            ],
            correct: 2,
            hint: 'The len() function returns the number of items in a container.'
        }
    ],
    
    intermediate: [
        {
            id: 1,
            type: 'multiple-choice',
            question: 'What does the range(1, 10, 2) function return?',
            code: null,
            options: [
                '[1, 2, 3, 4, 5, 6, 7, 8, 9]',
                '[1, 3, 5, 7, 9]',
                '[2, 4, 6, 8]',
                '[1, 10, 2]'
            ],
            correct: 1,
            hint: 'range(start, stop, step) generates numbers from start to stop-1 with the given step.'
        },
        {
            id: 2,
            type: 'debug',
            question: 'Fix the indentation error in this function:',
            code: 'def greet(name):\nprint(f"Hello, {name}!")\nreturn name',
            correct: 'def greet(name):\n    print(f"Hello, {name}!")\n    return name',
            hint: 'Python requires consistent indentation. Function body should be indented.'
        },
        {
            id: 3,
            type: 'predict-output',
            question: 'What will this list comprehension create?',
            code: 'squares = [x**2 for x in range(5)]\nprint(squares)',
            options: [
                '[0, 1, 4, 9, 16]',
                '[1, 4, 9, 16, 25]',
                '[2, 4, 6, 8, 10]',
                'Error'
            ],
            correct: 0,
            hint: 'range(5) generates 0,1,2,3,4 and each is squared.'
        },
        {
            id: 4,
            type: 'fill-blank',
            question: 'Complete the function definition:',
            code: '_____ calculate_area(radius):\n    return 3.14 * radius ** 2',
            correct: 'def',
            hint: 'This keyword is used to define functions in Python.'
        },
        {
            id: 5,
            type: 'multiple-choice',
            question: 'What is the output of this dictionary operation?',
            code: 'person = {"name": "Alice", "age": 30}\nprint(person.get("height", "Unknown"))',
            options: [
                'None',
                'Error',
                'Unknown',
                '30'
            ],
            correct: 2,
            hint: 'The get() method returns a default value if the key is not found.'
        },
        {
            id: 6,
            type: 'debug',
            question: 'Fix the logical error in this loop:',
            code: 'i = 0\nwhile i < 5:\n    print(i)',
            correct: 'i = 0\nwhile i < 5:\n    print(i)\n    i += 1',
            hint: 'The loop variable needs to be incremented to avoid infinite loop.'
        },
        {
            id: 7,
            type: 'predict-output',
            question: 'What will be the result?',
            code: 'def modify_list(lst):\n    lst.append(4)\n    return lst\n\noriginal = [1, 2, 3]\nresult = modify_list(original)\nprint(len(original))',
            options: [
                '3',
                '4',
                'Error',
                'None'
            ],
            correct: 1,
            hint: 'Lists are mutable objects, so modifying the parameter affects the original list.'
        },
        {
            id: 8,
            type: 'fill-blank',
            question: 'Complete the exception handling:',
            code: 'try:\n    result = 10 / 0\n______ ZeroDivisionError:\n    print("Cannot divide by zero")',
            correct: 'except',
            hint: 'This keyword is used to catch and handle exceptions.'
        },
        {
            id: 9,
            type: 'multiple-choice',
            question: 'What does the zip() function do?',
            code: 'list1 = [1, 2, 3]\nlist2 = ["a", "b", "c"]\nresult = list(zip(list1, list2))',
            options: [
                '[(1, 2, 3), ("a", "b", "c")]',
                '[(1, "a"), (2, "b"), (3, "c")]',
                '[1, 2, 3, "a", "b", "c"]',
                'Error'
            ],
            correct: 1,
            hint: 'zip() pairs up elements from multiple iterables.'
        },
        {
            id: 10,
            type: 'predict-output',
            question: 'What will this lambda function return?',
            code: 'numbers = [1, 2, 3, 4, 5]\neven_numbers = list(filter(lambda x: x % 2 == 0, numbers))\nprint(even_numbers)',
            options: [
                '[1, 3, 5]',
                '[2, 4]',
                '[True, False, True, False, True]',
                'Error'
            ],
            correct: 1,
            hint: 'filter() with lambda keeps only elements where the condition is True.'
        },
        {
            id: 11,
            type: 'fill-blank',
            question: 'Complete the class definition:',
            code: '_____ Dog:\n    def __init__(self, name):\n        self.name = name',
            correct: 'class',
            hint: 'This keyword is used to define classes in Python.'
        },
        {
            id: 12,
            type: 'debug',
            question: 'Fix the string formatting error:',
            code: 'name = "Alice"\nage = 25\nmessage = f"Hello, {name}. You are {age years old."',
            correct: 'name = "Alice"\nage = 25\nmessage = f"Hello, {name}. You are {age} years old."',
            hint: 'In f-strings, expressions inside {} must be properly closed.'
        },
        {
            id: 13,
            type: 'multiple-choice',
            question: 'What is the difference between append() and extend() for lists?',
            code: 'list1 = [1, 2]\nlist1.append([3, 4])\nlist2 = [1, 2]\nlist2.extend([3, 4])',
            options: [
                'append() adds individual elements, extend() adds the whole list',
                'extend() adds individual elements, append() adds the whole list',
                'They do the same thing',
                'Both cause errors'
            ],
            correct: 1,
            hint: 'append() adds one item (even if it\'s a list), extend() adds each item from an iterable.'
        },
        {
            id: 14,
            type: 'predict-output',
            question: 'What will be printed?',
            code: 'x = [1, 2, 3]\ny = x\ny.append(4)\nprint(len(x))',
            options: [
                '3',
                '4',
                'Error',
                'None'
            ],
            correct: 1,
            hint: 'When you assign a list to another variable, both variables reference the same list object.'
        },
        {
            id: 15,
            type: 'fill-blank',
            question: 'Complete the file operation:',
            code: '_____ open("file.txt", "r") as f:\n    content = f.read()',
            correct: 'with',
            hint: 'This keyword creates a context manager for proper file handling.'
        }
    ],
    
    advanced: [
        {
            id: 1,
            type: 'multiple-choice',
            question: 'What does the @property decorator do?',
            code: 'class Circle:\n    def __init__(self, radius):\n        self._radius = radius\n    \n    @property\n    def area(self):\n        return 3.14 * self._radius ** 2',
            options: [
                'Makes the method static',
                'Allows the method to be called like an attribute',
                'Makes the method private',
                'Caches the method result'
            ],
            correct: 1,
            hint: '@property allows you to access a method like an attribute without parentheses.'
        },
        {
            id: 2,
            type: 'debug',
            question: 'Fix the closure issue in this code:',
            code: 'functions = []\nfor i in range(3):\n    functions.append(lambda: print(i))\n\nfor f in functions:\n    f()  # This prints 2, 2, 2',
            correct: 'functions = []\nfor i in range(3):\n    functions.append(lambda x=i: print(x))\n\nfor f in functions:\n    f()  # This prints 0, 1, 2',
            hint: 'Use default arguments to capture the loop variable\'s value at each iteration.'
        },
        {
            id: 3,
            type: 'predict-output',
            question: 'What will this generator expression produce?',
            code: 'gen = (x**2 for x in range(5) if x % 2 == 0)\nprint(list(gen))',
            options: [
                '[0, 1, 4, 9, 16]',
                '[0, 4, 16]',
                '[1, 9]',
                'Error'
            ],
            correct: 1,
            hint: 'Only even numbers (0, 2, 4) from range(5) are squared.'
        },
        {
            id: 4,
            type: 'fill-blank',
            question: 'Complete the context manager:',
            code: 'class MyContext:\n    def __enter__(self):\n        return self\n    def _______(self, exc_type, exc_val, exc_tb):\n        return False',
            correct: '__exit__',
            hint: 'This magic method is called when exiting a context manager.'
        },
        {
            id: 5,
            type: 'multiple-choice',
            question: 'What is the output of this metaclass example?',
            code: 'class Meta(type):\n    def __new__(cls, name, bases, attrs):\n        attrs["class_id"] = f"ID_{name}"\n        return super().__new__(cls, name, bases, attrs)\n\nclass MyClass(metaclass=Meta):\n    pass\n\nprint(MyClass.class_id)',
            options: [
                'ID_MyClass',
                'ID_Meta',
                'Error',
                'None'
            ],
            correct: 0,
            hint: 'The metaclass adds class_id attribute during class creation with the class name.'
        },
        {
            id: 6,
            type: 'debug',
            question: 'Fix the decorator to preserve function metadata:',
            code: 'def my_decorator(func):\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)\n    return wrapper',
            correct: 'from functools import wraps\n\ndef my_decorator(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)\n    return wrapper',
            hint: 'Use functools.wraps to preserve the original function\'s metadata.'
        },
        {
            id: 7,
            type: 'predict-output',
            question: 'What will this multiple inheritance example print?',
            code: 'class A:\n    def method(self):\n        print("A")\n\nclass B(A):\n    def method(self):\n        print("B")\n        super().method()\n\nclass C(A):\n    def method(self):\n        print("C")\n        super().method()\n\nclass D(B, C):\n    pass\n\nD().method()',
            options: [
                'B\\nA',
                'B\\nC\\nA',
                'C\\nA',
                'Error'
            ],
            correct: 1,
            hint: 'Python uses Method Resolution Order (MRO). Check D.__mro__ to understand the order.'
        },
        {
            id: 8,
            type: 'fill-blank',
            question: 'Complete the descriptor class:',
            code: 'class MyDescriptor:\n    def __get__(self, obj, objtype):\n        return self.value\n    def _______(self, obj, value):\n        self.value = value',
            correct: '__set__',
            hint: 'This magic method is called when setting a value through the descriptor.'
        },
        {
            id: 9,
            type: 'multiple-choice',
            question: 'What does this asyncio code do?',
            code: 'import asyncio\n\nasync def fetch_data():\n    await asyncio.sleep(1)\n    return "data"\n\nasync def main():\n    tasks = [fetch_data() for _ in range(3)]\n    results = await asyncio.gather(*tasks)\n    return results',
            options: [
                'Runs fetch_data() 3 times sequentially',
                'Runs fetch_data() 3 times concurrently',
                'Only runs fetch_data() once',
                'Causes an error'
            ],
            correct: 1,
            hint: 'asyncio.gather() runs multiple coroutines concurrently.'
        },
        {
            id: 10,
            type: 'debug',
            question: 'Fix the memory leak in this code:',
            code: 'import weakref\n\nclass Node:\n    def __init__(self, value):\n        self.value = value\n        self.children = []\n        self.parent = None\n    \n    def add_child(self, child):\n        child.parent = self\n        self.children.append(child)',
            correct: 'import weakref\n\nclass Node:\n    def __init__(self, value):\n        self.value = value\n        self.children = []\n        self._parent = None\n    \n    @property\n    def parent(self):\n        return self._parent() if self._parent else None\n    \n    def add_child(self, child):\n        child._parent = weakref.ref(self)\n        self.children.append(child)',
            hint: 'Use weak references to break circular references between parent and child nodes.'
        },
        {
            id: 11,
            type: 'predict-output',
            question: 'What will this dataclass example output?',
            code: 'from dataclasses import dataclass, field\n\n@dataclass\nclass Person:\n    name: str\n    friends: list = field(default_factory=list)\n\np1 = Person("Alice")\np2 = Person("Bob")\np1.friends.append("Charlie")\nprint(len(p2.friends))',
            options: [
                '0',
                '1',
                'Error',
                'None'
            ],
            correct: 0,
            hint: 'field(default_factory=list) creates a new list for each instance, avoiding shared mutable defaults.'
        },
        {
            id: 12,
            type: 'fill-blank',
            question: 'Complete the custom exception:',
            code: 'class CustomError(________):\n    def __init__(self, message, code):\n        super().__init__(message)\n        self.code = code',
            correct: 'Exception',
            hint: 'Custom exceptions should inherit from Exception or one of its subclasses.'
        },
        {
            id: 13,
            type: 'multiple-choice',
            question: 'What is the purpose of __slots__ in a class?',
            code: 'class Point:\n    __slots__ = ["x", "y"]\n    \n    def __init__(self, x, y):\n        self.x = x\n        self.y = y',
            options: [
                'Defines private attributes',
                'Restricts attributes and saves memory',
                'Makes the class immutable',
                'Enables multiple inheritance'
            ],
            correct: 1,
            hint: '__slots__ restricts the attributes that can be added to instances and reduces memory usage.'
        },
        {
            id: 14,
            type: 'predict-output',
            question: 'What will this monkey patching example do?',
            code: 'class Calculator:\n    def add(self, a, b):\n        return a + b\n\ndef new_add(self, a, b):\n    print(f"Adding {a} and {b}")\n    return a + b\n\nCalculator.add = new_add\ncalc = Calculator()\nresult = calc.add(2, 3)',
            options: [
                'Prints nothing, returns 5',
                'Prints "Adding 2 and 3", returns 5',
                'Causes an error',
                'Returns None'
            ],
            correct: 1,
            hint: 'Monkey patching allows you to modify class methods at runtime.'
        },
        {
            id: 15,
            type: 'debug',
            question: 'Fix the thread safety issue:',
            code: 'import threading\n\nclass Counter:\n    def __init__(self):\n        self.count = 0\n    \n    def increment(self):\n        self.count += 1',
            correct: 'import threading\n\nclass Counter:\n    def __init__(self):\n        self.count = 0\n        self.lock = threading.Lock()\n    \n    def increment(self):\n        with self.lock:\n            self.count += 1',
            hint: 'Use threading.Lock() to ensure thread-safe access to shared resources.'
        }
    ]
};

// Export the database for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questionDatabase;
}