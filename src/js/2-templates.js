this["UAlberta"] = this["UAlberta"] || {};
this["UAlberta"]["FrontEnd"] = this["UAlberta"]["FrontEnd"] || {};
this["UAlberta"]["FrontEnd"]["templates"] = this["UAlberta"]["FrontEnd"]["templates"] || {};

Handlebars.registerPartial("DataList", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.items)),stack1 == null || stack1 === false ? stack1 : stack1[1])),stack1 == null || stack1 === false ? stack1 : stack1.thumbnail), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n      image-link-list\n    ";
  }

function program4(depth0,data) {
  
  
  return "\n      link-description-list\n    ";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  <li>\n    <a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.thumbnail), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.label), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </a>\n  </li>\n  ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"list-item-image frame\">\n      <img src=\""
    + escapeExpression(((stack1 = (depth0 && depth0.thumbnail)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n    </div>\n    ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    "
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n    ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <div class=\"list-item-content\">\n      <h4>"
    + escapeExpression(((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n      ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.date), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.source), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.author), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.description), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      \n    </div>\n    ";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <p class=\"list-item-extra list-item-date\"> "
    + escapeExpression(((stack1 = (depth0 && depth0.date)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " </p>\n      ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <p class=\"list-item-extra list-item-source\"> "
    + escapeExpression(((stack1 = (depth0 && depth0.source)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " </p>\n      ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <p class=\"list-item-extra list-item-author\"> "
    + escapeExpression(((stack1 = (depth0 && depth0.author)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " </p>\n      ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <p class=\"list-item-description\"> "
    + escapeExpression(((stack1 = (depth0 && depth0.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " </p>\n      ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li class=\"bottom-row\">\n      <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.moreLink)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.moreLink)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n    </li>\n  ";
  return buffer;
  }

  buffer += "<ul class=\"data-list\n  ";
  stack2 = helpers.unless.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.items)),stack1 == null || stack1 === false ? stack1 : stack1[1])),stack1 == null || stack1 === false ? stack1 : stack1.label), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\">\n  ";
  stack2 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.moreLink), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>";
  return buffer;
  }));

Handlebars.registerPartial("ImageCaption", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n  hover-caption-container\n  ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \n        href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" \n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <p class=\"caption\">\n        ";
  if (stack1 = helpers.imageCaption) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.imageCaption); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </p>\n    ";
  return buffer;
  }

  buffer += "<div class=\"image-caption-container\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hoverCaption), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  \">\n    <a \n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.url), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    class=\"image-shadow\">\n        <img src=\"";
  if (stack1 = helpers.imageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.imageSrc); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (stack1 = helpers.imageAlt) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.imageAlt); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    </a>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.imageCaption), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  ";
  return buffer;
  }));

this["UAlberta"]["FrontEnd"]["templates"]["accordion.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <li>\n        <a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n        <a class=\"accordion-toggle icon-plus\"></a>\n        <ul>\n            ";
  stack2 = helpers.each.call(depth0, (depth0 && depth0.links), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </ul>        \n    </li>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "              \n                <li>\n                    <a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                </li>\n            ";
  return buffer;
  }

  buffer += "<ul class=\"accordion-list\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.categories), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["carousel.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"slide image-caption-container\">\n          <a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"image-shadow\">\n            <img class=\"fma-background\" src=\""
    + escapeExpression(((stack1 = (depth0 && depth0.imageSrc)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = (depth0 && depth0.imageAlt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n          </a>\n          <div class=\"feature-caption caption\">\n            <h3>\n              <a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n            </h3>\n            <p>"
    + escapeExpression(((stack1 = (depth0 && depth0.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n          </div>\n        </div>\n      ";
  return buffer;
  }

  buffer += "<div class=\"flexslider\">\n    <div class=\"slides\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.features), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>\n";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["data-list.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"module-heading\">\n    <h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.actions), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <ul class=\"module-actions\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.actions), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n          <li>\n            <a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"heading-link btn btn-grey\">\n              ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.type), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n              ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.label), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </a>\n          </li>\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <i class=\"icon-"
    + escapeExpression(((stack1 = (depth0 && depth0.type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i>\n              ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                "
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n              ";
  return buffer;
  }

  buffer += "<div class=\"module-container\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.title), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = self.invokePartial(partials.DataList, 'DataList', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["explore-bar.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"explore-bar\" class=\"explore-bar-container\">\n  <ul class=\"explore-bar slides\">\n    <li>\n      <a href=\"http://uofa.ualberta.ca/dinosaurs/dino101\">\n        <i class=\"explore-i-dino101\" style=\"text-indent:-4px\"></i>\n        <span>Dino 101</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"http://www.bookstore.ualberta.ca/\">\n        <i class=\"explore-i-bookstore\"></i>\n        <span>Bookstore</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"http://www.registrar.ualberta.ca/calendar/\">\n        <i class=\"explore-i-u-calendar\"></i>\n        <span>University Calendar</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"http://www.residence.ualberta.ca/\">\n        <i class=\"explore-i-residence\"></i>\n        <span>Residence / Housing</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"http://www.campusmaps.ualberta.ca/\">\n        <i class=\"explore-i-maps\"></i>\n        <span>Maps</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"http://events.ualberta.ca/\">\n        <i class=\"explore-i-events\"></i>\n        <span>Events</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"http://www.athletics.ualberta.ca/\">\n        <i class=\"explore-i-athletics\"></i>\n        <span>Athletics</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"http://recservices.ualberta.ca/\">\n        <i class=\"explore-i-recreation\"></i>\n        <span>Recreation Services</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"http://www.uwell.ualberta.ca/\">\n        <i class=\"explore-i-wellness\"></i>\n        <span>Wellness</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"http://www.su.ualberta.ca/\">\n        <i class=\"explore-i-students-union\"></i>\n        <span>Students' Union</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"http://www.communityrelations.ualberta.ca/\">\n        <i class=\"explore-i-community\"></i>\n        <span>Community Relations</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"http://www.governance.ualberta.ca/\">\n        <i class=\"explore-i-governance\"></i>\n        <span>Governance</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"http://faculties.ualberta.ca/\">\n        <i class=\"explore-i-programs\"></i>\n        <span>Programs</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"http://www.international.ualberta.ca/\">\n        <i class=\"explore-i-international\"></i>\n        <span>International Impact</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"http://www.president.ualberta.ca/\">\n        <i class=\"explore-i-president\"></i>\n        <span>President</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"http://www.museums.ualberta.ca/\">\n        <i class=\"explore-i-museums\"></i>\n        <span>Museums</span>\n      </a>\n    </li>\n\n    <li>\n      <a href=\"http://www.gsa.ualberta.ca/\">\n        <i class=\"explore-i-graduate\"></i>\n        <span>Graduate Students' Association</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"http://news.ualberta.ca/mediarelations\">\n        <i class=\"explore-i-media\"></i>\n        <span>Media Relations</span>\n      </a>\n    </li>\n\n    <li>\n      <a href=\"http://www.sustainability.ualberta.ca/\">\n        <i class=\"explore-i-sustainability\"></i>\n        <span>Sustainability</span>\n      </a>\n    </li>\n  </ul>\n</div>";
  });

this["UAlberta"]["FrontEnd"]["templates"]["html-content.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function";


  if (stack1 = helpers.html) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.html); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["UAlberta"]["FrontEnd"]["templates"]["image-caption.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<div class=\"frame\">\n    ";
  stack1 = self.invokePartial(partials.ImageCaption, 'ImageCaption', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n ";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["inline-field.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"inline-form\">\n    <i class=\"icon-";
  if (stack1 = helpers.icon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.icon); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></i>\n    <input id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "-query\" type=\"text\" placeholder=\"";
  if (stack1 = helpers.placeholder) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.placeholder); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <button id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "-button\" class=\"btn btn-grey btn-small\" type=\"button\">\n      ";
  if (stack1 = helpers.buttonLabel) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.buttonLabel); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </button>\n</div>\n";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["link-filter.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <li class=\"link-mod-category link-mod-active\">\n      <h4><a>"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></h4>\n      <ul class=\"link-mod-items link-mod-searchable\">\n        ";
  stack2 = helpers.each.call(depth0, (depth0 && depth0.links), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      </ul>\n    </li>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <li><a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n        ";
  return buffer;
  }

  buffer += "<ul class=\"link-mod-container\">\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.category), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["news-article.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = self.invokePartial(partials.ImageCaption, 'ImageCaption', (depth0 && depth0.image), helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

  buffer += "<article>\n    <header>\n        <h1 class=\"page-title\">\n            ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </h1>\n        <p class=\"teaser\">\n            ";
  if (stack1 = helpers.teaser) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.teaser); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </p>\n        <p class=\"date\">\n            By\n            ";
  if (stack1 = helpers.author) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.author); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n            on\n            ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.date); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </p>\n    </header>\n    <div class=\"article-content\">\n        <div class=\"story\">\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.image), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  if (stack1 = helpers.story) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.story); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <aside>\n            <hr class=\"soften first\">\n            <h3>Share this story</h3>\n            <div class=\"social-media-actions\"></div>\n            <hr class=\"soften\">\n            <h3>Related links</h3>\n            <ul id=\"related-links\" class=\"data-list\"></ul>\n            <hr class=\"soften\">\n            <h3>Top stories</h3>\n            <ul id=\"top-stories\" class=\"data-list\"></ul>\n        </aside>\n    </div>    \n</article>";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["sidebar-content.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n      <!-- display image -->\n    ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <a class=\"btn\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.moreLink)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.moreLink)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n  ";
  return buffer;
  }

  buffer += "<div class=\"sidebar-module extrude\">\n  <h5 class=\"sidebar-title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h5>\n  <div class=\"sidebar-content\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.image), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.content); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.moreLink), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["sidebar-links.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<div class=\"sidebar-module extrude\">\n  <h5 class=\"sidebar-title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h5>\n  <div class=\"sidebar-content\">\n    ";
  stack1 = self.invokePartial(partials.DataList, 'DataList', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["sidebar-social-media.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li>\n          <a href=\"";
  if (stack1 = helpers.facebook) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.facebook); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">\n            <img src=\"assets/img/social-icons/webicon-facebook.png\">\n            Facebook\n          </a>\n        </li>\n      ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li><a href=\"";
  if (stack1 = helpers.foursquare) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.foursquare); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\"><img src=\"assets/img/social-icons/webicon-foursquare.png\"> Foursquare</a></li>\n      ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li><a href=\"";
  if (stack1 = helpers.twitter) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.twitter); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\"><img src=\"assets/img/social-icons/webicon-twitter.png\"> Twitter</a></li>\n      ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li><a href=\"";
  if (stack1 = helpers.tumblr) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.tumblr); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\"><img src=\"assets/img/social-icons/webicon-tumblr.png\"> Tumblr</a></li>\n      ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li><a href=\"";
  if (stack1 = helpers.youtube) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.youtube); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\"><img src=\"assets/img/social-icons/webicon-youtube.png\"> YouTube</a></li>\n      ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <a class=\"btn\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.moreLink)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.moreLink)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n  ";
  return buffer;
  }

  buffer += "<div class=\"sidebar-module extrude\">\n  <h5 class=\"sidebar-title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h5>\n  <div class=\"sidebar-content\">\n    <ul class=\"data-list social-media-list\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.facebook), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.foursquare), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.twitter), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tumblr), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.youtube), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </div>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.moreLink), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["single-feature.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <a class=\"btn btn-green btn-micro read\" href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n          ";
  return buffer;
  }

  buffer += "<ul class=\"slides\">\n  <li class=\"ga_ualberta_fma ";
  if (stack1 = helpers.featureClass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.featureClass); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <div class=\"feature-wrapper\">\n      <div class=\"feature-image focus-";
  if (stack1 = helpers.imageFocalPoint) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.imageFocalPoint); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n          <img src=\"";
  if (stack1 = helpers.imageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.imageSrc); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (stack1 = helpers.imageAlt) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.imageAlt); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n      </div>\n      <div class=\"feature-content "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.boxPosition)),stack1 == null || stack1 === false ? stack1 : stack1.horizontal)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-island "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.boxPosition)),stack1 == null || stack1 === false ? stack1 : stack1.vertical)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-island ";
  if (stack2 = helpers.boxClass) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.boxClass); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n        <h3>";
  if (stack2 = helpers.heading) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.heading); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h3>\n        <p>";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.description); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n        <div class=\"feature-buttons\">\n          ";
  stack2 = helpers.each.call(depth0, (depth0 && depth0.buttons), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n      </div>\n    </div>\n  </li>\n</ul>";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["tabbed-feature.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"fma-slide fma-active fma-hover\">\n            "
    + escapeExpression(((stack1 = (depth0 && depth0.content)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        </div>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <li class=\"fma-button-active fma-button-hover\">\n                    <a>"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                </li>\n                ";
  return buffer;
  }

  buffer += "<div>\n    <div class=\"fma-container\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.tabFeature), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"fma-tabs-container\">\n        <div class=\"container\">\n            <ul class=\"fma-tabs row-fluid\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.tabFeature), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </ul>\n        </div>\n    </div>\n</div>\n";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["tabs.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li><a href=\"#"
    + escapeExpression(((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"tab-pane\">"
    + escapeExpression(((stack1 = (depth0 && depth0.content)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n        ";
  return buffer;
  }

  buffer += "<div>\n    <ul class=\"nav nav-tabs\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.tabs), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n    <div class=\"tab-content\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.tabs), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>\n";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["why-ualberta-row.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"inset\">\n  <div class=\"why-ualberta-row row-fluid ga_ualberta_why-ualberta\">\n    <div class=\"frame why-thumbnail\">\n      <a class=\"image-shadow\" href=\"http://news.ualberta.ca/newsarticles/2013/september/ualberta-alumni-founded-organizations-a-staggering-engine-of-albertas-prosperity\">\n      <img src=\"http://www.ualberta.ca/~publicas/uofa/img/alumni-impact-img.png\">\n      </a>\n    </div>\n    <div class=\"why-text\">\n      <h3>$348.5 Billion Engine</h3>\n      <p class=\"description\">Landmark study by Faculty of Business professors Tony Briggs and Jennifer Jennings highlights the economic and\n      social impact of UAlberta alumni. <br><a href=\"http://news.ualberta.ca/newsarticles/2013/september/ualberta-alumni-founded-organizations-a-staggering-engine-of-albertas-prosperity\">See the results.</a></p>\n    </div>\n    <div class=\"button-container\">\n      <a href=\"http://admission.ualberta.ca/\" class=\"btn btn-apply km_1000_ualberta\">Apply Now</a>\n      <a href=\"http://www.careers.ualberta.ca/\" class=\"btn btn-work km_1001_ualberta\">Careers</a>\n      <a href=\"http://www.giving.ualberta.ca/\" class=\"btn btn-give km_1002_ualberta\">Give to the U of A</a>\n    </div>\n  </div>\n</div>\n";
  });

this["UAlberta"]["FrontEnd"]["templates"]["youtube-video.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"frame\">\n    <div class=\"hover-caption-container\">\n        <a href=\"//www.youtube.com/embed/";
  if (stack1 = helpers.videoId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.videoId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "?wmode=transparent&amp;autoplay=1\" class=\"image-shadow video-modal-link\" data-target=\"#videoModal\" data-toggle=\"modal\" data-title=\"";
  if (stack1 = helpers.videoTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.videoTitle); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-mobileurl=\"//www.youtube.com/watch?v=";
  if (stack1 = helpers.videoId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.videoId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n            <img src=\"";
  if (stack1 = helpers.videoThumbnail) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.videoThumbnail); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n            <i class=\"icon-play-circle\"></i>\n        </a>\n        <div class=\"caption\">\n            <p>\n                ";
  if (stack1 = helpers.videoDescription) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.videoDescription); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n            </p>\n        </div>\n    </div>\n</div>\n";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["content-page.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row-fluid\">\n  <div id=\"left-nav\" class=\"span navigation\"></div>\n  <div id=\"content-column\" class=\"span content\"></div>\n  <div id=\"sidebar\" class=\"span sidebar\"></div>\n</div>";
  });

this["UAlberta"]["FrontEnd"]["templates"]["faculty-home.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["faculty-landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["news-article.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["ualberta-home.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"feature-area\" class=\"feature-container\"></div>\n\n<div id=\"why-ualberta\" class=\"why-container container\">\n  \n  <div class=\"inset\">\n    <div class=\"why-ualberta-row row-fluid ga_ualberta_why-ualberta\">\n      <div class=\"frame why-thumbnail\">\n        <a class=\"image-shadow\" href=\"http://news.ualberta.ca/newsarticles/2013/september/ualberta-alumni-founded-organizations-a-staggering-engine-of-albertas-prosperity\">\n        <img src=\"http://www.ualberta.ca/~publicas/uofa/img/alumni-impact-img.png\">\n        </a>\n      </div>\n      <div class=\"why-text\">\n        <h3>$348.5 Billion Engine</h3>\n        <p class=\"description\">Landmark study by Faculty of Business professors Tony Briggs and Jennifer Jennings highlights the economic and\n        social impact of UAlberta alumni. <br><a href=\"http://news.ualberta.ca/newsarticles/2013/september/ualberta-alumni-founded-organizations-a-staggering-engine-of-albertas-prosperity\">See the results.</a></p>\n      </div>\n      <div class=\"button-container\">\n        <a href=\"http://admission.ualberta.ca/\" class=\"btn btn-apply km_1000_ualberta\">Apply Now</a>\n        <a href=\"http://www.careers.ualberta.ca/\" class=\"btn btn-work km_1001_ualberta\">Careers</a>\n        <a href=\"http://www.giving.ualberta.ca/\" class=\"btn btn-give km_1002_ualberta\">Give to the U of A</a>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"content-container container\">\n\n  <div class=\"content-inner row-fluid\">\n\n    <div class=\"main-content span\">\n    \n      <div id=\"explore-row\" class=\"row-fluid\"></div>\n\n      <hr class=\"soften explore-separator\">\n\n      <div class=\"row-fluid\">\n\n        <div id=\"first-column\" class=\"primary-content-area span\"></div> \n\n        <div id=\"second-column\" class=\"secondary-content-area span\"></div>\n\n      </div>\n\n    </div>\n\n    <div id=\"sidebar\" class=\"span sidebar\"></div>\n\n  </div>\n \n</div>\n";
  });

this["UAlberta"]["FrontEnd"]["templates"]["ualberta-landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<div id=\"feature\" class=\"content-top-row\"></div>\n\n<div id=\"page-title\" class=\"page-title-row\"></div>\n\n<div class=\"content-container container\">\n    \n    <div class=\"content-inner row-fluid\">\n\n        <div id=\"first-column\" class=\"span primary-content-area\"></div>\n    \n        <div id=\"second-column\" class=\"span secondary-content-area clearfix\"></div>\n\n        <div id=\"sidebar\" class=\"span sidebar\"></div>\n\n    </div>\n\n</div>\n";
  });

this["UAlberta"]["FrontEnd"]["templates"]["banner.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"banner-logo\">\n                <span class=\"site-logo\">\n                    <a href=\"";
  if (stack1 = helpers.siteUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.siteUrl); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.siteLogo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.siteLogo); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (stack1 = helpers.siteTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.siteTitle); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\n                </span>\n            </div>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <a href=\"";
  if (stack1 = helpers.siteUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.siteUrl); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"site-title\">";
  if (stack1 = helpers.siteTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.siteTitle); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <nav class=\"audience-navigation\">\n                <ul>\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.audienceLinks), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n            </nav> \n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <li role=\"menuitem\" class=\"audience-link\">\n                        <a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                    </li>\n                    ";
  return buffer;
  }

  buffer += "<div class=\"banner-container\">\n    <div class=\"banner-inner\">\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.siteLogo), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.audienceLinks), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n\n    </div>\n</div>  \n";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["blade.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <a class=\"brand\" href=\"http://ualberta.ca\">\n            <img src=\"";
  if (stack1 = helpers.logo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.logo); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"University of Alberta\">\n        </a>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            <li role=\"menuitem\">\n                                <a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                            </li>\n                        ";
  return buffer;
  }

  buffer += "<div class=\"blade-container\">\n    <div class=\"blade-inner\">\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.logo), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <nav class=\"blade-navigation\">\n            <ul class=\"quick-links-container\">\n                <li id=\"ql\" class=\"dropdown\">\n                    <a href=\"#\" id=\"ql-toggle\" class=\"btn btn-grey btn-small hidden-desktop\">\n                        <span class=\"quick-links-text\">Quick Links</span>\n                    </a> \n                    <ul class=\"quick-links\" role=\"menu\" aria-labelledby=\"ql-toggle\">\n                        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.quickLinks), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </ul>\n                </li>\n            </ul>\n        </nav>\n\n        <div class=\"blade-search\">\n            <i class=\"icon-search\"></i>\n            <input type=\"search\" class=\"search-query\" placeholder=\"search\">\n            <button type=\"button\" class=\"btn btn-grey btn-small global-search-btn\">Search</button>\n        </div>\n\n    </div>\n</div>  \n ";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["global-navigation.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                        <li role=\"menuitem\" class=\"nav";
  if (stack1 = helpers.index) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.index); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                            <a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n\n                            ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.subMenu), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                        </li>\n                    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                                <div class=\"sub-menu\">\n                                    <div class=\"sub-menu-content\">\n\n                                        ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.subMenu)),stack1 == null || stack1 === false ? stack1 : stack1.links), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n                                        ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.subMenu)),stack1 == null || stack1 === false ? stack1 : stack1.content), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                                        \n                                    </div> \n                                </div>\n                            ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n                                            <ul class=\"section-navigation\">\n                                                ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.subMenu)),stack1 == null || stack1 === false ? stack1 : stack1.links), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                                            </ul>\n\n                                        ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                                                <li>\n                                                    <a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                                                </li>\n                                                ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                                            <div id=\"phCustomContent\" class=\"section-description\">\n                                                ";
  stack2 = ((stack1 = ((stack1 = (depth0 && depth0.subMenu)),stack1 == null || stack1 === false ? stack1 : stack1.content)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                                            </div>\n                                        ";
  return buffer;
  }

  buffer += "<div class=\"navigation-container\">\n    <nav id=\"main-nav\" class=\"navigation-inner\">\n        <ul>\n            <li>\n                <a class=\"navigation-toggle\">\n                    <span>Show Navigation</span>\n                    <i class=\"icon-toggle-nav\"></i>\n                </a>\n                <ul id=\"nav-list\" class=\"main-navigation collapse\">\n\n                    ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.each_with_index || (depth0 && depth0.each_with_index)),stack1 ? stack1.call(depth0, (depth0 && depth0.globalLinks), options) : helperMissing.call(depth0, "each_with_index", (depth0 && depth0.globalLinks), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n                </ul>\n            </li>\n        </ul>\n    </nav>\n</div> \n ";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["institutional-footer.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <li>\n                        <a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"\">"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                    </li>\n                    ";
  return buffer;
  }

  buffer += "<div class=\"bottom-footer-row\">\n    <div class=\"footer-container container\">\n        <div class=\"footer-inner row-fluid\">\n            <div class=\"span12 footer-copyright\">\n                <ul class=\"footer-quick-links\">\n\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.footerLinks), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                    <li><a href=\"#\">Back to Top</a></li>\n\n                </ul>\n                <p>© 2014 <span id=\"phfooter_0_ualberta_address\">University of Alberta 116 St. and 85 Ave., <br class=\"visible-phone\">Edmonton, AB, Canada T6G 2R3</span></p>\n            </div>\n        </div>\n    </div>\n</div> \n";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["mobile-navigation.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"nav-mobile\">\n    <div class=\"nav-wrapper\">\n        <ul class=\"level-0\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.mobileLinks), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n    </div>\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n            <li>\n                <a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.children), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </li>\n            ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <ul class=\"level-1\">\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.children), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n                ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                    <li>\n                        <a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                        ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.children), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                    </li>\n                    ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <ul class=\"level-2\">\n                            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.children), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        </ul>\n                        ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                            <li>\n                                <a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                                ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.children), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                            </li>\n                            ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                                <ul class=\"level-3\">\n                                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.children), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                </ul>\n                                ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                                    <li>\n                                        <a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                                    </li>\n                                    ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mobileLinks), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["page-title.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <li><a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n        ";
  return buffer;
  }

  buffer += "\n<div class=\"title-container container\">\n    \n    <ul class=\"breadcrumbs\">\n        \n        <li class=\"\"><a href=\"";
  if (stack1 = helpers.homeLink) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.homeLink); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.homeName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.homeName); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n        \n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.breadcrumbs), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <li class=\"bc-here\">";
  if (stack1 = helpers.pageName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.pageName); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n        \n    </ul>\n    \n    <h1 class=\"page-title\">";
  if (stack1 = helpers.pageName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.pageName); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n\n</div>\n";
  return buffer;
  });

this["UAlberta"]["FrontEnd"]["templates"]["secondary-footer.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                                <li><a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n                            ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <li>\n                            <a class=\"btn-social-media "
    + escapeExpression(((stack1 = (depth0 && depth0.icon)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-footer\" href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">\n                                <i class=\"icon-"
    + escapeExpression(((stack1 = (depth0 && depth0.icon)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i>\n                                <span>"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                            </a>\n                        </li>\n                        ";
  return buffer;
  }

  buffer += "<div class=\"top-footer-row\">\n    <div class=\"footer-container container\">\n        <div class=\"footer-inner row-fluid\">\n            <div class=\"span6 footer-faculty-links\">\n                <h3>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.secondaryFooter)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n                <div class=\"row-fluid\">\n                    <div class=\"span5\">\n                    \n                        <ul class=\"faculty-links\">\n                            ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.secondaryFooter)),stack1 == null || stack1 === false ? stack1 : stack1.links), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                        </ul>\n                        \n                    </div>\n                    <div class=\"span7\">\n                        \n                        <ul class=\"unstyled social-media\">\n                        \n                        ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.secondaryFooter)),stack1 == null || stack1 === false ? stack1 : stack1.socialMedia), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                    \n                        </ul>\n                            \n                    </div>\n                </div>\n            </div>\n            <div class=\"span6 vcard\">\n                <h3>Contact Information</h3>\n                <div class=\"row-fluid\">\n                    <div class=\"span6\">\n                        <p class=\"adr\">\n                            <span class=\"street-address\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.secondaryFooter)),stack1 == null || stack1 === false ? stack1 : stack1.streetAddress)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><br>\n                            <span class=\"locality\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.secondaryFooter)),stack1 == null || stack1 === false ? stack1 : stack1.locality)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>, \n                            <span class=\"region\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.secondaryFooter)),stack1 == null || stack1 === false ? stack1 : stack1.region)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><br>\n                            <span class=\"country-name\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.secondaryFooter)),stack1 == null || stack1 === false ? stack1 : stack1.country)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> \n                            <span class=\"postal-code\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.secondaryFooter)),stack1 == null || stack1 === false ? stack1 : stack1.postalCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><br>\n                        </p>\n                        \n                    </div>\n                    <div class=\"span6\"> \n                        <div>\n                            <strong><abbr title=\"Telephone\">Tel:</abbr> </strong>\n                            <span>1-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.secondaryFooter)),stack1 == null || stack1 === false ? stack1 : stack1.telephone)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                        </div>\n                        <div>\n                            <strong>Fax: </strong>\n                            <span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.secondaryFooter)),stack1 == null || stack1 === false ? stack1 : stack1.fax)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                        </div>\n                        <p><strong>Email: </strong><a href=\"mailto:"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.secondaryFooter)),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"email\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.secondaryFooter)),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
  return buffer;
  });