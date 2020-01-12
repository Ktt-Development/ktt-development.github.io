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

- Use features only in JDK 11
- Use 4 space indentation

#### Imports
- Use static imports for enums that have more than one value.
- Use static imports for enums within classes.

#### Classes
- Use `PascalCase` for class names.
- Keep scope and access modifiers in the same order.
```java 
public abstract class
public static final class
```
- Always use `final` keyword when possible.

#### Variables
- Use `camelCase` for variable names.
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
public static final void method(final String string){
    setText(string + getClass().getSimpleName());
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

#### Syntax
- Use double brace initialization.
```java
new Class(){{
    setString(string);
}}
```
