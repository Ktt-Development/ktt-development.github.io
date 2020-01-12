# Contributing

## Basic Guidelines

#### Use English.
Files, methods, variables, and comments* must be written in English.

*\*comments may be written in any language but must have an English translation as well*

#### Use an IDE.
It is recommended to use [IntelliJ IDEA](https://www.jetbrains.com/idea/download/).

#### Make sure compile is stable.
Do not submit a pull request without testing if the code compiles.

#### Do not make large changes.
Large changes are unlikely to be reviewed in a timely matter, pull requests be focused on one issue or feature.

## Style Guidelines (Java)

- Use features only in JDK 11.
- Use 4 space indentation.
- Do not wrap lines (the IDE will wrap lines visually).

#### Imports
- Use static imports for enums that have more than one value.
- Use static imports for enums within classes.

#### Classes
- Use `PascalCase` for class and package names.
- Do not start with `_` or use `$` in class names.
- Keep scope and access modifiers in the same order.
```java 
public abstract class
public static final class
```
- Always use `final` keyword when possible.

#### Variables
- Use `camelCase` for variable names.
- Do not start with `_` for variable names.
- Keep scope and access modifiers in the same order.
```java
public static final Object
```
- Always use `final` keyword when possible.
- Array assignment should be multiline except when using primitive data types.
```java
private static final int[] arr = {1,2,4};

private static final String[] arr = {
    "String",
    "String"
};
```
- Use primitive data types except where required (like lists).

~~`Integer`~~ `int`
~~`Double`~~ `double`
~~`Boolean`~~ `boolean`
~~`Char`~~ `char`

- Try to assign overused variables in a higher scope for better memory usage.
```java
// Bad
public static final void method(final String string){
    setText(string + getClass().getSimpleName());
}

// Good

private static final String className = getClass().getSimpleName();

public static final void method(final String string){
    setText(string + className);
}

```

#### Methods
- Use `camelCase` for method names.
- Do not start with `_` for method names.
- Keep scope and access modifiers in the same order
```java
public abstract void method();
public static final void method();
```
- Methods inside constructors should not use `this` unless necessary.
```java
private final String string;

public method(final String string){
    this.string = string; // OK
    this.setString(string); // NO 

    setString(string); // OK
}
```
- Parameters must always be `final`
```java
    public method(final String string){ };
```
- Do not create unnecessary methods. Use a `Runnable` or `Consumer` when possible.
- Use lambdas where possible.

#### Syntax
- Organize sections of code by function.
```java
public void method(){
    /* set text */ {
        setText("Text");
    }
    /* read text */ {
        System.out.println(getText());
    }
}
// Don't use for operations this simple, but you get the idea.
```
- Use double brace instantiation.
```java
new Class(){{
    setString(string);
}}
```
- No surrounding spaces.
```java
    if(true){
    
    }
    
    while(true){
    
    }
```
- Keep variable assignment in columns (except if there is only one).
```java
private final String 
    textOne,
    textTwo
;
```
- Use simplified expressions.
```java
// Bad
public final boolean method(){
    if(getText().equals("text")){
        return true;
    }else{
        return false;
    }
}

// Good
public final boolean method(){
    return getText().equals("text");
}
```
- Keep lengthy if statements on multiple lines.
```java 
if(
    (conditionOne && conditionTwo) ||
    (
        checkConditionOne(conditionOne) &&
        checkConditionTwo(conditionTwo)
    )
){

}
```
- Use conditional expressions where possible.
```java 
// Bad
if(conditionOne){
    string = "text";
}else{
    string = "";
}

// Good
string = conditionOne ? "text" : "";

// Good for longer statements
string = 
    conditionOne 
    ? "text"
    : ""
;
```
- Use switch cases instead of if statements where possible.
```java
// Bad
if(string.equals("one")){

}else if(string.equals("two"){

}

// Good
switch(string){
    "one" : 
        // code
        break;
    "two" :
        // code
        break;
}
```
- Use for each loops unless index is necessary.
```java
String[] arr = new String[100];
// Bad
for(int index = 0; index < arr.length; index++){
    System.out.println(arr[index]);
}

// Good
for(String iterator : arr){
    System.out.println(iterator);
}
```
#### Files
- Use only lower case file extensions
