using tEST_APPSrv as service from '../../srv/service';
annotate service.FilteredData with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'CompanyCode',
                Value : CompanyCode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Contract',
                Value : Contract,
            },
            {
                $Type : 'UI.DataField',
                Label : 'RealEstateObject',
                Value : RealEstateObject,
            },
            {
                $Type : 'UI.DataField',
                Label : 'ConditionPurpose',
                Value : ConditionPurpose,
            },
            {
                $Type : 'UI.DataField',
                Label : 'ConditionType',
                Value : ConditionType,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ]
);

