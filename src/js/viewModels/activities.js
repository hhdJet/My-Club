/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery',
    'ojs/ojknockout', 'ojs/ojfilmstrip', 'ojs/ojradioset', 'ojs/ojselectcombobox',
    'promise', 'ojs/ojtable', 'ojs/ojarraytabledatasource', 'ojs/ojbutton', 'ojs/ojmasonrylayout'],
        function (oj, ko, $) {

            function IncidentsViewModel() {
                var self = this;
                
                var noticeArray = [{ActId: 1001, ActivityTitle: 'Basketball will be hold on 30.Mar ...'},
                    {ActId: 556, ActivityTitle: 'Hip hot dancing club recently...'},
                    {ActId: 10, ActivityTitle: 'FY.2017 Outing will be hold on 8.April ...'},
                    {ActId: 20, ActivityTitle: 'Basketball will be hold on 30.March ...'}];
                self.datasource = new oj.ArrayTableDataSource(noticeArray, {idAttribute: 'ActId'});

                self.buttons = [
                    {name: 'Search',
                        sizeClass: 'oj-masonrylayout-tile-1x1'},
                    {name: 'Ball Games',
                        sizeClass: 'oj-masonrylayout-tile-1x1'},
                    {name: 'Gymnastics',
                        sizeClass: 'oj-masonrylayout-tile-1x1'},
                    {name: 'Create',
                        sizeClass: 'oj-masonrylayout-tile-1x1'},
                    {name: 'Outdoor Activities',
                        sizeClass: 'oj-masonrylayout-tile-1x1'},
                    {name: 'Other Activities',
                        sizeClass: 'oj-masonrylayout-tile-1x1'}
                ];

                // deal with buttons
                self.clickedButton = ko.observable("(None clicked yet)");
                self.buttonClick = function (data, event) {
                    self.clickedButton(event.currentTarget.id);
                    return true;
                }


                self.chemicals = [
                    {path: 'css/images/Picture2.png'},
                    {path: 'css/images/Picture3.png'},
                    {path: 'css/images/Picture4.png'},
                    {path: 'css/images/Picture2.png'},
                    {path: 'css/images/Picture3.png'},
                    {path: 'css/images/Picture4.png'},
                    {path: 'css/images/Picture2.png'},
                    {path: 'css/images/Picture3.png'},
                    {path: 'css/images/Picture4.png'}
                ];

                self.currentNavArrowPlacement = ko.observable("adjacent");
                self.currentNavArrowVisibility = ko.observable("auto");

                getItemInitialDisplay = function (index)
                {
                    return index < 3 ? '' : 'none';
                };

                this.tags = ko.observableArray([
                    {value: ".net", label: ".net"},
                    {value: "Accounting", label: "Accounting"},
                    {value: "ADE", label: "ADE"},
                    {value: "Adf", label: "Adf"},
                    {value: "Adfc", label: "Adfc"},
                    {value: "Adfm", label: "Adfm"},
                    {value: "Android", label: "Android"},
                    {value: "Aria", label: "Aria"},
                    {value: "C", label: "C"},
                    {value: "C#", label: "C#"},
                    {value: "C++", label: "C++"},
                    {value: "Chrome", label: "Chrome"},
                    {value: "Cloud", label: "Cloud"},
                    {value: "CSS3", label: "CSS3"},
                    {value: "DBA", label: "DBA"},
                    {value: "Eclipse", label: "Eclipse"},
                    {value: "Firefox", label: "Firefox"},
                    {value: "Git", label: "Git"},
                    {value: "Hibernate", label: "Hibernate"},
                    {value: "HTML", label: "HTML"},
                    {value: "HTML5", label: "HTML5"},
                    {value: "IE", label: "IE"},
                    {value: "IOS", label: "IOS"},
                    {value: "Java", label: "Java"},
                    {value: "Javascript", label: "Javascript"},
                    {value: "JDeveloper", label: "JDeveloper"},
                    {value: "Jet", label: "jet"},
                    {value: "JQuery", label: "JQuery"},
                    {value: "JQueryUI", label: "JQueryUI"},
                    {value: "JS", label: "JS"},
                    {value: "Knockout", label: "Knockout"},
                    {value: "MAF", label: "MAF"},
                    {value: "Maven", label: "Maven"},
                    {value: "MCS", label: "MCS"},
                    {value: "MySql", label: "MySql"},
                    {value: "Netbeans", label: "Netbeans"},
                    {value: "Oracle", label: "Oracle"},
                    {value: "Solaris", label: "solaris"},
                    {value: "Spring", label: "spring"},
                    {value: "Svn", label: "Svn"},
                    {value: "UX", label: "UX"},
                    {value: "xhtml", label: "xhtml"},
                    {value: "XML", label: "XML"}
                ]);

                this.keyword = ko.observableArray();
                this.val = ko.observableArray(["CH"]);
                // Below are a subset of the ViewModel methods invoked by the ojModule binding
                // Please reference the ojModule jsDoc for additionaly available methods.

                /**
                 * Optional ViewModel method invoked when this ViewModel is about to be
                 * used for the View transition.  The application can put data fetch logic
                 * here that can return a Promise which will delay the handleAttached function
                 * call below until the Promise is resolved.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
                 * the promise is resolved
                 */
                self.handleActivated = function (info) {
                    // Implement if needed
                };

                /**
                 * Optional ViewModel method invoked after the View is inserted into the
                 * document DOM.  The application can put logic that requires the DOM being
                 * attached here.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
                 */
                self.handleAttached = function (info) {
                    // Implement if needed
                };


                /**
                 * Optional ViewModel method invoked after the bindings are applied on this View. 
                 * If the current View is retrieved from cache, the bindings will not be re-applied
                 * and this callback will not be invoked.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 */
                self.handleBindingsApplied = function (info) {
                    // Implement if needed
                };

                /*
                 * Optional ViewModel method invoked after the View is removed from the
                 * document DOM.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
                 */
                self.handleDetached = function (info) {
                    // Implement if needed
                };
            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new IncidentsViewModel();
        }
);
