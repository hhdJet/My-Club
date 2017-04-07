/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojchart', 'ojs/ojtoolbar'],
        function (oj, ko, $) {

            function CustomerViewModel() {
                var self = this;
//Table
                var deptArray = [{Type: 'Total Num', Ball: 10, dance: 7, outing: 3, other: 4},
                    {Type: 'Enrolled Num', Ball: 8, dance: 1, outing: 3, other: 1},
                    {Type: 'Ratio', Ball: '80%', dance: '23%', outing: '100%', other: '25%'}];
                self.datasource = new oj.ArrayTableDataSource(deptArray, {idAttribute: 'Type'});

                /* toggle button variables */
                self.stackValue = ko.observable('off');
                self.orientationValue = ko.observable('vertical');
                /* chart data */
                var barSeries = [{name: "Age 21-24", items: [42]}, //[42, 34]
                    {name: "Age 25-28", items: [55]}, // [55, 30]
                    {name: "Age 29-32", items: [36]}, //[36, 50]
                    {name: "Age 33-36", items: [22]}, //[22, 46]
                    {name: "Age 36+", items: [22]}];
                [22, 46]

                var barGroups = ["Group A"];   // ["Group A", "Group B"];
                self.barSeriesValue = ko.observableArray(barSeries);
                self.barGroupsValue = ko.observableArray(barGroups);
                /* toggle buttons*/
                self.stackOptions = [
                    {id: 'unstacked', label: 'unstacked', value: 'off', icon: 'oj-icon demo-bar-unstack'},
                    {id: 'stacked', label: 'stacked', value: 'on', icon: 'oj-icon demo-bar-stack'}
                ];
                self.orientationOptions = [
                    {id: 'vertical', label: 'vertical', value: 'vertical', icon: 'oj-icon demo-bar-vert'},
                    {id: 'horizontal', label: 'horizontal', value: 'horizontal', icon: 'oj-icon demo-bar-horiz'}
                ];


                var colorHandler = new oj.ColorAttributeGroupHandler();

                var Male = createNode("Male", "0", getValue(), getColor());
                var Female = createNode("Female", "1", getValue(), getColor());



                var nodes = [Male, Female];

                function createNode(label, id, value, color) {
                    return {label: label,
                        id: id,
                        value: value,
                        color: color,
                        shortDesc: "&lt;b&gt;" + label +
                                "&lt;/b&gt;&lt;br/&gt;Value: " + value};
                }

                function addChildNodes(parent, childNodes) {
                    parent.nodes = [];
                    for (var i = 0; i < childNodes.length; i++) {
                        parent.nodes.push(childNodes[i]);
                    }
                }
                function getValue() {
                    return Math.round(50 + 50 * Math.random());
                }

                function getColor() {
                    return colorHandler.getValue(Math.floor(Math.random() * 4));
                }

                self.nodeValues = ko.observableArray(nodes);
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
            return new CustomerViewModel();
        }
);
