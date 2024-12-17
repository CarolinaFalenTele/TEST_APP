sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'testapp/pruebaapp/test/integration/FirstJourney',
		'testapp/pruebaapp/test/integration/pages/DynamicDataList',
		'testapp/pruebaapp/test/integration/pages/DynamicDataObjectPage'
    ],
    function(JourneyRunner, opaJourney, DynamicDataList, DynamicDataObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('testapp/pruebaapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheDynamicDataList: DynamicDataList,
					onTheDynamicDataObjectPage: DynamicDataObjectPage
                }
            },
            opaJourney.run
        );
    }
);