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

Projects in Java must be written in JDK11.

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

#### Variables
- Use `CamelCase` for variable names.

