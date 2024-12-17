namespace TEST_APP;
using { cuid } from '@sap/cds/common';

@assert.unique: { code: [code] }
entity CompanyCodes : cuid {
  code: String(10) @mandatory;
  description: String(100);
}

@assert.unique: { contractNumber: [contractNumber] }
entity Contracts : cuid {
  contractNumber: String(20) @mandatory;
  conditionValue: Decimal(10,2);
  companyCode: Association to CompanyCodes;
  realEstateObject: Association to RealEstateObjects;
  conditionPurpose: Association to ConditionPurposes;
  conditionType: Association to ConditionTypes;
}

@assert.unique: { objectId: [objectId] }
entity RealEstateObjects : cuid {
  objectId: String(20) @mandatory;
  description: String(100);
}

@assert.unique: { purposeId: [purposeId] }
entity ConditionPurposes : cuid {
  purposeId: String(20) @mandatory;
  description: String(100);
}

@assert.unique: { typeId: [typeId] }
entity ConditionTypes : cuid {
  typeId: String(20) @mandatory;
  description: String(100);
}



entity FilteredData {
  key CompanyCode                : String;
 // ID           : String;   // Correspondiente a A0COMP_CODE
  Contract              : String;   // Correspondiente a A0RECONTRACT
  RealEstateObject      : String;   // Correspondiente a A0REOBJECT_T
  ConditionPurpose      : String;   // Correspondiente a A0CONDPURP_T
  ConditionType         : String;   // Correspondiente a ZRE_CCTYP
}


entity Metadatos {
    key ID : UUID;
    CompanyCode : String;
    Contract : String;
    RealEstateObject : String;
    ConditionPurpose : String;
    BusinessEntity : String;
    FreqUnitsofPrd : String;
    EndofTermDescription : String;
    Contract1stBusinesPartner : String;
    ContractStartDate : Date;
    ContractStartDateDescr : String;
    ContractType : String;
    RentalObject : String;
    RentalObjectType : String;
    ObjectType : String;
    Occupancy : String;
    Land : String;
    UsageTypeofRentalUnit : String;
    CalendarYearMonth : String;
    CalendarYearMonthDescri : String;
    ConditionperMonth : String;
    ConditionperMonthFormTT : String;
    ConditionperMonthCurre : String;
    PaymentTerms : String;
    PaymentFrequency : String;
    RentalAmount : String;
    Currency : String;
}

/*entity Metadatos {
    key ID : UUID;
    xmlContent : LargeString; // Aquí podrías guardar datos XML si es necesario
     Field1  : String;
    Field2  : String(4);
    Field3  : String(13);
    Field4  : String(40);
    Field5  : String(4);
    Field6  : String;
    Field7  : String(50);
    Field8  : String(50);
    Field9 : String(50);
    Field10 : String;
    Field11  : String(50);
    Field12 : String(100);
    Field13 : String(50); 
    Field14 : String;
    Field15 : String;
    Field16 : String;
    Field17 : String;
    Field18 : String;
    Field19 : String;
    Field20 : String;
    Field21 : String;
    Field22 : String;
    Field23 : String;
    Field24 : String;
    Field25 : String;
    Field26 : String; 
}*/




entity DynamicData {
    key ID : UUID;// Para diferenciar entre Metadata y FilteredData
    SelectOption: String; // Campo para capturar la selección
    Field1  : String;
    Field2  : String;
    Field3  : String;
    Field4  : String;
    Field5  : String;
    Field6  : String;
    Field7  : String;
    Field8  : String;
    Field9  : String;
    Field10 : String;
    Field11  : String;
    Field12 : String;
    Field13 : String; 
    Field14 : String;
    Field15 : String;
    Field16 : String;
    Field17 : String;
    Field18 : String;
    Field19 : String;
    Field20 : String;
    Field21 : String;
    Field22 : String;
    Field23 : String;
    Field24 : String;
    Field25 : String;
    Field26 : String;  
}






/*
entity FilteredData {
    key ID : String;
    TotaledProperties : String;
    A0COMP_CODE : String;
    A0RECONTRACT : String;
    A0RECONTRACT_T : String;
    A0REOBJECT_T : String;
    A0CONDPURP : String;
    A0CONDPURP_T : String;
    ZRE_CCTYP : String;
    A0BUSENTITY_T : String;
    A0CONDFREQU : String;
    A0CONDFRUNIT_T : String;
    A0CONTREND : String;
    A0CONTREND_T : String;
    A0CONTRPART1_T : String;
    A0CONTRSTART : String;
    A0CONTRSTART_T : String;
    A0CONTRTYPE_T : String;
    A0REBUILDING_T : String;
    A0RENTOBJECT_T : String;
    A0RENTTYPE_T : String;
    A0REOBJTYPE_T : String;
    A0REOCCUP_T : String;
    A0REPROPERTY_T : String;
    A0USAGETYPE : String;
    A0CALMONTH : String;
    A0CALMONTH_T : String;
    A8TWB2A8L78WV8R6UED0TLTOO7 : String;
    A8TWB2A8L78WV8R6UED0TLTOO7_F : String;
    A8TWB2A8L78WV8R6UED0TLTOO7_E : String;
}*/