sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'testapp/appfilter/test/integration/FirstJourney',
		'testapp/appfilter/test/integration/pages/CompanyCodesList',
		'testapp/appfilter/test/integration/pages/CompanyCodesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CompanyCodesList, CompanyCodesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('testapp/appfilter') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCompanyCodesList: CompanyCodesList,
					onTheCompanyCodesObjectPage: CompanyCodesObjectPage
                }
            },
            opaJourney.run
        );
    }
);