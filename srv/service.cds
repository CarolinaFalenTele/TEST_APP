using { TEST_APP as my } from '../db/schema.cds';

@path : '/service/tEST_APP'
service tEST_APPSrv
{
    @odata.draft.enabled
    entity CompanyCodes as
        projection on my.CompanyCodes;

    @odata.draft.enabled
    entity Contracts as
        projection on my.Contracts;

    @odata.draft.enabled
    entity RealEstateObjects as
        projection on my.RealEstateObjects;

    @odata.draft.enabled
    entity ConditionPurposes as
        projection on my.ConditionPurposes;

    @odata.draft.enabled
    entity ConditionTypes as
        projection on my.ConditionTypes;

    @odata.draft.enabled
    entity FilteredData as
        projection on my.FilteredData;

    entity Metadatos as
        projection on my.Metadatos;
    
    entity DynamicData  as projection on my.DynamicData; 
    
}

annotate tEST_APPSrv with @requires :
[
    'authenticated-user'
];
