function __searchInit(){
    var query = new URLSearchParams(window.location.search);

    // search
    var search = query.has("s") ? query.get("s") : "";
    var sbox = document.getElementById("search");

    if(sbox == null) return;

    sbox.value = search;
    sbox.addEventListener("keyup", function(e){
        if(event.keyCode === 13)
            document.getElementById("searchButton").click();
    });

    // filter
    if(query.has("s")) query.delete("s");

    for(var p of query.entries()){
        var k = p[0];
        var v = p[1];
        var btn = document.getElementById(`filter-${k}-${v}`);

        if(btn == null) continue;
        btn.className = btn.className.replace("outline-","");
        btn.innerHTML = `${btn.innerHTML}<i class='fas fa-times ml-auto pt-1 pr-1 float-right'></i>`;
    };

    // output

    var type        = query.has("type")         ? query.get("type").toLowerCase()       : "";
    var support     = query.has("supported")    ? query.get("supported").toLowerCase()  : "";
    var category    = query.has("category")     ? query.get("category").toLowerCase()   : "";
    var language    = query.has("language")     ? query.get("language").toLowerCase()   : "";

    $.getJSON(
        "/dependencies/ktt-development/data/repository.json",
        function(data){
            var repos   = data.repository;
            var proj    = data.project;

            var match = [];

            $.each(repos, function(k,v){
                var rtag = v.tags;
                v.isRepo = true;

                for(var i = 0; i < rtag.categories.size; i ++)
                    rtag.categories[i] = rtag.categories[i].toLowerCase();

                if(
                    (search     === "" || v.name.toLowerCase().startsWith(search.toLowerCase())) &&
                    (type       === "" || rtag.type         === type) &&
                    (support    === "" || (rtag.isSupported && support === "supported") || (!rtag.isSupported && support === "unsupported")) &&
                    (category   === "" || rtag.categories.includes(category)) &&
                    (language   === "" || rtag.languages.includes(language))
                )
                    match.push(v);
            });

            $.each(proj, function(k,v){
                var rtag = v.tags;
                v.isRepo = false;

                for(var i = 0; i < rtag.categories.size; i ++)
                    rtag.categories[i] = rtag.categories[i].toLowerCase();

                if(
                    (search     === "" || v.name.toLowerCase().startsWith(search.toLowerCase())) &&
                    (type       === "" || rtag.type         === type) &&
                    (support    === "" || (rtag.isSupported && support === "supported") || (!rtag.isSupported && support === "unsupported")) &&
                    (category   === "" || rtag.categories.includes(category)) &&
                    (language   === "" || rtag.languages.includes(language))
                )
                    match.push(v);
            });

            match.sort((a, b) => a.name.localeCompare(b.name));

            var out = "";
        
            for(var i = 0; i < match.length; i++){
                var repo = match[i];

                if(i%2 == 0) out += "<div class='row'>";
                    
                out += 
                    `<div class="col-sm-6 mb-4">
                        <div class="media">
                            <img 
                                class="mr-3 rounded-circle"
                                style="width:50px;height:50px;"
                                src="/${repo.isRepo ? "repository" : "project"}/${repo.name.toLowerCase()}/assets/logo-sharp.png" 
                                alt="icon"
                            >
                            <div class="media-body">
                                <a 
                                    href="/${repo.isRepo ? "repository" : "project"}/${repo.name.toLowerCase()}"
                                    class="mr-1 stretched-link a-hover unset">${repo.name}</a>`;

                out += 
                    repo.tags.isSupported ?
                                `<i 
                                    class="fas fa-check-circle text-success position-relative"
                                    style="z-index:2;"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Currently Supported"
                                ></i>` :
                                `<i 
                                    class="fas fa-times-circle text-danger position-relative"
                                    style="z-index:2;"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Not Supported"
                                ></i>`;

                out +=          `<br><small class="text-muted">${repo.preview}</small>
                            </div>
                        </div>
                    </div>`;
                        
                if(i != 0 && i%2 == 1) out += "</div>"
            }
            document.getElementById("results").innerHTML = out;

            $(function () {
                $('[data-toggle="tooltip"]').tooltip();
            })
        }
    );
}

function search(){
    var query = new URLSearchParams(window.location.search);
    
    var search = document.getElementById("search").value;
    if(search == null) return;
    
    if(search.trim().length > 0)
        query.set("s",search);
    else
        query.delete("s");

    window.location.href = "/repository?" + query.toString();
}

function filter(scope,id){
    var query = new URLSearchParams(window.location.search);

    var btn = document.getElementById(`filter-${scope}-${id}`);
    if(btn == null) return;

    if(btn.className.includes("btn-outline"))
        query.set(scope,id);
    else
        query.delete(scope);

    window.location.href="/repository?" + query.toString();
}