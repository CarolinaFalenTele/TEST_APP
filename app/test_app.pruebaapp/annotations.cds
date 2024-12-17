using tEST_APPSrv as service from '../../srv/service';
annotate service.DynamicData with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'SelectOption',
                Value : SelectOption,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field1',
                Value : Field1,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field2',
                Value : Field2,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field3',
                Value : Field3,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field4',
                Value : Field4,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field5',
                Value : Field5,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field6',
                Value : Field6,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field7',
                Value : Field7,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field8',
                Value : Field8,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field9',
                Value : Field9,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field10',
                Value : Field10,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field11',
                Value : Field11,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field12',
                Value : Field12,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field13',
                Value : Field13,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field14',
                Value : Field14,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field15',
                Value : Field15,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field16',
                Value : Field16,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field17',
                Value : Field17,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field18',
                Value : Field18,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field19',
                Value : Field19,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field20',
                Value : Field20,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field21',
                Value : Field21,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field22',
                Value : Field22,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field23',
                Value : Field23,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field24',
                Value : Field24,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field25',
                Value : Field25,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Field26',
                Value : Field26,
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
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'SelectOption',
            Value : SelectOption,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Field1',
            Value : Field1,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Field2',
            Value : Field2,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Field3',
            Value : Field3,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Field4',
            Value : Field4,
        },
    ],
        UI.SelectionFields : [
        'SelectOption',
          ],

        
);

annotate service.FilteredData with @(
    UI : {
        LineItem : [
            { Value : CompanyCode, Label : 'Company Code' },
            { Value : Contract, Label : 'Contract' },
            { Value : RealEstateObject, Label : 'Real Estate Object' },
            { Value : ConditionPurpose, Label : 'Condition Purpose' },
            { Value : ConditionType, Label : 'Condition Type' }
        ]
    }
);


