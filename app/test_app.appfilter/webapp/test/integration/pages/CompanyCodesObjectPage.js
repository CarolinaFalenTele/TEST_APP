sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'testapp.appfilter',
            componentId: 'CompanyCodesObjectPage',
            contextPath: '/CompanyCodes'
        },
        CustomPageDefinitions
    );
});