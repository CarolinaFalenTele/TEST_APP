sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'testapp/appfilterdestino/test/integration/FirstJourney',
		'testapp/appfilterdestino/test/integration/pages/FilteredDataList',
		'testapp/appfilterdestino/test/integration/pages/FilteredDataObjectPage'
    ],
    function(JourneyRunner, opaJourney, FilteredDataList, FilteredDataObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('testapp/appfilterdestino') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheFilteredDataList: FilteredDataList,
					onTheFilteredDataObjectPage: FilteredDataObjectPage
                }
            },
            opaJourney.run
        );
    }
);