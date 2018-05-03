

//----- 1 - CompositeAudioNode ----
// has connect/disconnect methods
// A custom composite node can be derived from this prototype.

class CompositeAudioNode {
  get _isCompositeAudioNode() {
    return true;
  }

  constructor(context, options) {
    this.context = context;
    this._input = this.context.createGain();
    this._output = this.context.createGain();
  }

  connect() {
    this._output.connect.apply(this._output, arguments);
  }

  disconnect() {
    this._output.disconnect.apply(this._output, arguments);
  }
}

// (2) Override AudioNode.prototype.connect
AudioNode.prototype._connect = AudioNode.prototype.connect;
AudioNode.prototype.connect = function () {
  var args = Array.prototype.slice.call(arguments);
  if (args[0]._isCompositeAudioNode)
    args[0] = args[0]._input;

  this._connect.apply(this, args);
};


// -----------------------
// CREATE THE PLUGIN CLASS
// -----------------------
// THIS DEFINES API properties and methods
// that will be inherited with default values
// part of the WAP SDK
class WebAudioPluginCompositeNode extends CompositeAudioNode {
  constructor(context, options) {
    super(context, options);
    this.context = ctx ? ctx : new AudioContext;

    // Do stuffs below.
  }

  set descriptor(descriptor) {
    this._descriptor = descriptor;
  }

  getDescriptor() {
    return this._descriptor;
  }

  set metadata(metadata) {
    this._metadata = metadata;
  }

  getMetadata() {
    return this._metadata;
  }

  set params(params) {
    this._params = params;
  }

  get params() {
    return this._params;
  }

  inputChannelCount() { };

  getPatch(index) { };

  setPatch(data, index) { };

  getParam(key) { };

  getState() { };

  setState(data) { };

  onMidi(msg) { };


}


class WebAudioPluginFactory {

  constructor(context, baseUrl) {
    this.context = context;
    this.baseUrl = baseUrl;
    this.MetadataFileURL = this.baseUrl + "/main.json";
  }

  fetchPlugin() {
    return new Promise((resolve, reject) => {
      fetch(this.MetadataFileURL)
        .then(responseJSON => {
          return responseJSON.json();
        }).then(metadata => {
          resolve(metadata.name);
        });
    });
  }

  load() {
      return new Promise((resolve, reject) => {
        this.fetchPlugin().then(classname =>{
          try{
            this.plug = new window[classname](this.context);
            resolve(this.plug);
          } catch (e){
            reject(e);
          }

        })
        
      });
  }

  loadGui() {
    return new Promise((resolve, reject) => {
      this.plug.setState('disable');
      try {
        // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
        let url = this.baseUrl + "/main.html";


        if (!this.linkExists(url)) {
          // LINK DOES NOT EXIST, let's add it to the document
          var link = document.createElement('link');
          link.rel = 'import';
          //link.id = 'urlPlugin';
          link.href = url;
          document.head.appendChild(link);



          link.onload = (e) => {
            // the file has been loaded, instanciate GUI
            // and get back the HTML elem
            // HERE WE COULD REMOVE THE HARD CODED NAME
            var element = createWAP(this.plug);
            resolve(element);
          }
        } else {
          // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
          // so we can create another instance
          console.log(this.plug);
          var element = createWAP(this.plug);
          resolve(element);
        }
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  };

  linkExists(url) {
    return document.querySelectorAll(`link[href="${url}"]`).length > 0;

  }


}

