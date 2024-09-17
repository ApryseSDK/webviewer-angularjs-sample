angular.module('components', [])

  .directive('webviewer', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function($scope, $element) {
        WebViewer({
          path: 'lib', // path to the PDFTron 'lib' folder on your server
          // licenseKey: 'Insert commercial license key here after purchase',
          initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
          // initialDoc: '/path/to/my/file.pdf',  // You can also use documents on your server
        }, document.getElementById('viewer'))
          .then(function(instance) {
            var docViewer = instance.Core.documentViewer;
            var annotManager = instance.Core.annotationManager;
            // call methods from instance, docViewer and annotManager as needed

            // you can also access major namespaces from the instance as follows:
            var Tools = instance.Core.Tools;
            var Annotations = instance.Core.Annotations;

            // change to dark theme
            instance.UI.setTheme('dark');

            // call methods relating to the loaded document
            docViewer.addEventListener('documentLoaded', function () {
              console.log("Document is loaded.");
            });
          });
      },
      template: "<div id='viewer' style='width: 100%; height: 100%; margin: 0 auto;'></div>",
      replace: true
    };
  })
