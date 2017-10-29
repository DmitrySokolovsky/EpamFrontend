function Renderer(){ }

Renderer.prototype.createTemplate = function(properties){
    var elem = document.createElement(properties.tag);
    if(properties.class) elem.classList.add(properties.class);
    if (properties.content) {
        elem.innerHTML = properties.content;
    }

    if(properties.handler){
        elem.addEventListener(properties.handler.type,properties.handler.func);
    }

    if (properties.child) {
        for (var i = 0; i < properties.child.length; i++) {
            elem.appendChild(this.createTemplate(properties.child[i]));
        }
    }
    return elem;
}

Renderer.prototype.contents = function(properties,arr,selection,selectionClass){ 
    var children = [];
    for(var i = 0;i<arr.length;i++){
        var construct = new ObjectConstructor(arr[i],{
            class: properties.class,
            tag: properties.tag
        });
        if(arr[i]===selection){
            construct.class = selectionClass
        }
        children.push(construct);
    }
    return children;
};



Renderer.prototype.render = function(elem,place){
    var place = document.getElementById(place);
    place.appendChild(elem);
}