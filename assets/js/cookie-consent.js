window.cookieconsent.initialise({
    "palette": {
        "popup": {
        "background": "#edeff5",
        "text": "#838391"
        },
        "button": {
        "background": "#4b81e8"
        }
    },
    "type": "opt-in",
    "content": {
        "message": "This website uses cookies to the sole purpose of providing better content.",
        "dismiss": "Got it!",
        "allow": "Allow cookies",
        "link": "Learn more",
        "href": "andreaaspesi.dev/terms"
    },
    onInitialise: function (status) {
        var type = this.options.type;
        var didConsent = this.hasConsented();
        if (type == 'opt-in' && didConsent) {
            // enable cookies
            loadGAonConsent();
        }
        if (type == 'opt-out' && !didConsent) {
            // disable cookies
        }
    },
    onStatusChange: function(status, chosenBefore) {
        var type = this.options.type;
        var didConsent = this.hasConsented();
        if (type == 'opt-in' && didConsent) {
            // enable cookies
            loadGAonConsent();
        }
        if (type == 'opt-out' && !didConsent) {
            // disable cookies
        }
    },
    onRevokeChoice: function() {
        var type = this.options.type;
        if (type == 'opt-in') {
            // disable cookies
        }
        if (type == 'opt-out') {
            // enable cookies
            loadGAonConsent();
        }
    }
});