---
---
## ✔️ Simple

Easily customize file renders.

- Customize files with yaml front matter
- Add bulk configurations with default configs

<!-- separator -->

```yml
---
renderers:
  - renderer
---
```
```yml
default:
  scope:
    - '*.html'
    - '!index.html'
renderers: 
  - renderer
  - plugin: MyPlugin
    renderer: renderer
```

<!-- separator -->

## ⚙️ Flexible

- Customize site access with permissions
- Set input and output folders in configuration

<!-- separator -->

```yml
groups:
  default:
    options:
      default: true
    permissions:
      - $1
  admin:
    inheritance:
      - default
    options:
      connection-limit: -1
    permissions:
      - '*'
users:
  127.0.0.1:
    groups:
      - admin
    permissions:
      - '!permission'
```

<!-- separator -->

## 🔌 Extensible

Add additional features with WebDir Plugins.
- File renderers
- Built-in locale support
- Access to server features with [simplehttpserver](https://github.com/Ktt-Development/simplehttpserver)

<!-- separator -->

```java
public class Plugin extends WebDirPlugin{

    public Plugin(final PluginService service){
        super(service);
    }

    @Override
    public void onEnable(){

        addRenderer("renderer", new Renderer(){

            @Override
            public byte[] render(final FileRender render){
                SimpleHttpServer server = render.getServer();
                SimpleHttpExchange exchange = render.getHttpExchange();

                return super.render(render);
            }

        });

    }

}
```