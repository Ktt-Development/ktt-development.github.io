---
---
## 📋 Complicated tasks made easy

Simplified exchange methods for:
- Parsing HTTP `GET`/`POST` with `multipart/form-data` support.
- Output stream writing with `#send`.
- Sending gzip compressed responses.
- Sending files

<!-- separator -->

```java
SimpleHttpHandler handler = new SimpleHttpHandler(){

    @Override
    public void handle(SimpleHttpExchange exchange){
        Map POST = exchange.getPostMap();
        
        MultipartFormData form = exchange.getMultipartFormData();
        Record record = form.getRecord("record");
        FileRecord file = (FileRecord) form.getRecord("file");

        exchange.send(new File("OK.png"), true);
    }

};
```

<!-- separator -->

## ⭐ Extended Features

Out of the box support for:
- HTTP Cookies
- HTTP Sessions
- Multithreaded Servers

<!-- separator -->

```java
SimpleHttpServer server = new SimpleHttpServer(8080);
server.setHttpSessionHandler(new HttpSessionHandler());

HttpHandler handler = new HttpHandler(){

    @Override
    public void handle(HttpExchange exchange){
        HttpSession session = server.getHttpSession(exchange);
        String session_id = session.getSessionID();

        Map<String,String> cookies = exchange.getCookies(); 

        exchange.close();
    }

};
```

<!-- separator -->

## 💻 Simplified Handlers

Easy to use handlers:
- Redirect Handler
- Predicate Handler
- File Handler
- Server-Sent-Events Handler
- Temporary Handler
- Throttled Handler
<!-- separator -->

```java
RedirectHandler redirect = new RedirectHandler("https://github.com/");

FileHandler fileHandler = new FileHandler();
fileHandler.addFile(new File("index.html"));
fileHandler.addDirectory(new File("/site"))

SSEHandler SSE = new SSEHandler();
SSE.push("Server sent events!");

ThrottledHandler throttled = new ThrottledHandler(new HttpHandler(), new ServerExchangeThrottler())
```
