var oer = oer || {};

(function () {
	oer.menuStateAssignment = function(menu, menuToggleIcon, state){
		state = state ? true : false; // if state is undefined, toggleClass will toggle the state of the and not respect the falsey nature of the state.
		menu.toggleClass('mobileOpen', state);
		menuToggleIcon.toggleClass('open', state);
		menuToggleIcon.attr('aria-pressed', state);
	};

	$(document).ready(function(){
		oer.menuToggleIcon = $("#nav-icon3");
		oer.menu = $("#menu");

		oer.menuStateAssignment(oer.menu, oer.menuToggleIcon);

		oer.menuToggleIcon.click(function(){
			var state = oer.menu.is(":hidden");
			oer.menuStateAssignment(oer.menu, oer.menuToggleIcon, state);
		});

		oer.megaMenu = $("nav:first").accessibleMegaMenu({
			/* prefix for generated unique id attributes, which are required
			to indicate aria-owns, aria-controls and aria-labelledby */
			uuidPrefix: "accessible-megamenu",

			/* css class used to define the megamenu styling */
			menuClass: "nav-menu",

			/* css class for a top-level navigation item in the megamenu */
			topNavItemClass: "nav-item",

			/* css class for a megamenu panel */
			panelClass: "sub-nav",

			/* css class for a group of items within a megamenu panel */
			panelGroupClass: "sub-nav-group",

			/* css class for the hover state */
			hoverClass: "hover",

			/* css class for the focus state */
			focusClass: "focus",

			/* css class for the open state */
			openClass: "open"
		});
	});

})();
