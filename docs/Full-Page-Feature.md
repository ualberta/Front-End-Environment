# Full Page Feature

Adds a feature space with a content island and large image that spans the entire width of the page.

## Usage

To create a full page feature you should provide a heading, description, buttons, and image.

    var data = {
      type: "full-page-feature",
      features: [
        {
          "imageSrc" : "http://www.placehold.it/1680x504",
          "heading" : "Base Feature",
          "description" : "This feature contains the minimal amount of data to create a feature.",
          "buttons": [
            {
              "url": "http://www.ualberta.ca/",
              "label": "Learn More",
              "type": "green",
              "size": "micro"
            }
          ]            
        }
      ]
    };

    var featureModule = UAlberta.FrontEnd.Modules.addModule(
      'carousel',
      data,
      null,
      '#feature-area',
      { wrapperClass: 'full-page-feature' }
    );


## Data

The json object for feature data accepts the following parameters:

  - **`heading`**: The heading to put in the content box
  - **`buttons`**: an array of button objects to place inside the content box
  - `description`: A sentence to display under the heading
  - `featureClass`: a class name to add to the feature wrapper
  - `imageSrc`: a url to the feature image
  - `imageFocalPoint`: where should the image focus on small resolutions [`left`, `center`, `right`]
  - `alignment`: anchor the image to the left or right side of the window on larger resolutions [`left`,`center`,`right`]
  - `boxClass`: used to style the content island [`dark`, `light`, `no-box`]
  - `hBoxPosition`: horizontal box position [`left`,`center`,`right`]
  - `vBoxPosition`: vertical box position [`center`, `bottom`]
  - `backgroundSrc`: url to a background image
  - `backgroundColor`: color to use for the background behind the image
  - `shadowOverlay`: set to true or false to enable inset shadow
  - `gradientOverlay`: adds a white or black gradient overlay on top of the image on high resolutions [`left dark`, `right dark`, `left light`, `right light`]
