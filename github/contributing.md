---
---
# General Guidelines

##### Use English (US)

Files, methods, variables, and comments* must be written in English.

*\*comments may be written in any language but must have an English translation*

##### Make sure that the code compiles.

Do not submit a pull request without first testing if the code compiles first.

##### Do not make large changes.

Large changes are unlikely to be reviewed in a timely manner. If you are introducing a major change, please have multiple pull requests for individual changes to your own branch, then submit a final pull request containing those pulls. This will make tracking changes easier.

##### Include issue numbers with commits and pull requests.

Please include issue numbers with pull requests and commits.

# Syntax Guidelines

*Examples are in Java but syntax guidelines still apply to any language used here.*

##### Imports

- Keep imports at the top of the file.

##### Variables

- Do not start with `_` for variable names.
- Declare variables as final/read-only where possible.
- Keep array/list assignment on one line except with strings.
  ```java
  int[] arr = [1, 2, 3]
  String[] arr = [
      "String",
      "String"
  ]
  ```

##### Methods

- Do not start with `_` for variable names.
- Declare parameters as final/read-only where possible.
- Do not create unnecessary methods. Use disposable or inline classes.

##### Syntax

- Do not add surrounding spaces.
  ```java
  if(true){
      
  }
  
  while(true){
  
  }
  ```
- Remove brackets for single line conditionals.
  ```java
  if(true)
      System.out.println("true")
  
  for(int i = 0; i < 100; i++)
      System.out.println("true")
  
  while(true)
      System.out.println("true")
  ```
- Use shorthand operators and keep spaces between operators.
  ```java
  int x = 0;
  
  x++;
  x *= 2;
  ```
- Use ternary statements where possible.
  ```java
  String even = 3 % 2 == 0 ? "even" : "odd";
  ```
- Use lambda expressions where possible.
  ```java
  Consumer<String> consumer = string -> {};
  ```
- Use switch statments where possible;
  ```java
  String string = "";
  
  switch(string){
      default:
          System.out.println("none");
          break;
      case "1":
          System.out.println("1");
          break;
  }
  ```
- Use foreach loops where possible.
  ```java
  String[] arr = {"string"};
  
  for(final String s : arr)
      System.out.println(s);
  ```
- Use optimized indexed loops if needed.
  ```java
  String[] arr = {"string"};
  int len = arr.length;
  
  for(int i = 0; i < len; i++)
      System.out.println(i);
  ```