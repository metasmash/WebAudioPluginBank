/*  ################################## LOOPER ########################################  */

/* ES6 web audio class following the API standard
* Author : Jordan Sintes
* Comment: Based on the the pitch detecotr here: https://webaudiodemos.appspot.com/pitchdetect/index.html
*/
window.LooperMachine = class LooperMachine extends WebAudioPluginCompositeNode {
    constructor(ctx, URL, options) {
        super(ctx, URL, options)
        /*    ################     API PROPERTIES    ###############   */

        this.options = options;
        this.state;
        this.params = { "status": "unavaiable" }
        super.setup();

    }

    /*    ################     API METHODS    ###############   */
    getPatch(index) {
        console.warn("this module does not implements patches use getState / setState to get an array of current params values ");
    }
    setPatch(data, index) {
        console.warn("this module does not implements patches use getState / setState to get an array of current params values ");
    }

    setParam(key, value) {
        console.log(key, value);
        try {
            this[key] = (value);
        } catch (error) {
            console.warn(key, error);
            console.warn("this plugin does not implement this param")
        }
    }

    createNodes() {

    }

    connectNodes() {

    }

    /*  #########  Personnal code for Looper  #########   */

    set status(_status) {
        var mediaRecorder;
        if (_status === "record") {
            if (navigator.mediaDevices) {
                console.log('getUserMedia supported');
                var constraints = { audio: true };
                var chunks = [];
                navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
                    mediaRecorder = new MediaRecorder(stream);
                    mediaRecorder.start();
                    console.log(mediaRecorder.state);
                      console.log("recorder started");
                        
                    });
            }
        } else if (_status === "play") {
            mediaRecorder.stop();
            console.log(mediaRecorder);
        } else if (_status === "stop") {

        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiLooperMachine = class WasabiLooperMachine extends WebAudioPluginFactory {
    constructor(context, baseUrl) { super(context, baseUrl); }
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) { return new LooperMachine(this, options); };