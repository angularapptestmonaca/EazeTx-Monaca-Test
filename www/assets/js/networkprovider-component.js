
$(document).ready(function () {
    if ($('#ddlSearchElements').val() == "0") {
        $(".page_content").css("overflow-y", "unset");
    }
    $('#ddlSearchElements').change(function () {
        
        $('#txt_ProviderName').val("");
        $('#ddl_Providertype').val("All");
        $('#ddl_City').val("");
        $('#ddl_location').val("");
        $('#txt_Intproname').val("");
        $('#ddl_CountryFil').val("");
        $('#ddl_IntCity').val("");
        $('#txt_indproName').val("");
        $('#ddl_indState').val("");
        $('#ddl_indCity').val("");
        $('#txt_GCCProvider').val("");
        $('#ddl_GCCCountry').val("");
        $('#ddl_Loc').val("");

        if ($('#ddlSearchElements').val() == "UAE") {
            
            $("#divUAEnw").removeClass("hidden");
            $("#divSearchbtn").removeClass("hidden");
            $("#divDataAddressDetails").addClass("hidden");
            $("#divInterNW").addClass("hidden");
            $("#divDataProviderDetails").addClass("hidden");
            $("#divINDnw").addClass("hidden");
            $("#divDataIndNw").addClass("hidden");
            $("#divGCCnw").addClass("hidden");
            $("#divDataGCC").addClass("hidden");
            $(".page_content").css("overflow-y", "scroll");
        }
        else if ($('#ddlSearchElements').val() == "INT") {

            $("#divSearchbtn").removeClass("hidden");
            $("#divInterNW").removeClass("hidden");
            $("#divDataAddressDetails").addClass("hidden");
            $("#divUAEnw").addClass("hidden");
            $("#divDataProviderDetails").addClass("hidden");
            $("#divINDnw").addClass("hidden");
            $("#divDataIndNw").addClass("hidden");
            $("#divGCCnw").addClass("hidden");
            $("#divDataGCC").addClass("hidden");
            $(".page_content").css("overflow-y", "scroll");
        }
        else if ($('#ddlSearchElements').val() == "IND") {
            $("#divINDnw").removeClass("hidden");
            $("#divSearchbtn").removeClass("hidden");
            $("#divDataAddressDetails").addClass("hidden");
            $("#divInterNW").addClass("hidden");
            $("#divDataProviderDetails").addClass("hidden");
            $("#divUAEnw").addClass("hidden");
            $("#divDataIndNw").addClass("hidden");
            $("#divGCCnw").addClass("hidden");
            $("#divDataGCC").addClass("hidden");
            $(".page_content").css("overflow-y", "scroll");
        }
        else if ($('#ddlSearchElements').val() == "GCC") {
            $("#divGCCnw").removeClass("hidden");
            $("#divSearchbtn").removeClass("hidden");
            $("#divDataAddressDetails").addClass("hidden");
            $("#divInterNW").addClass("hidden");
            $("#divDataProviderDetails").addClass("hidden");
            $("#divUAEnw").addClass("hidden");
            $("#divDataIndNw").addClass("hidden");
            $("#divINDnw").addClass("hidden");
            $("#divDataGCC").addClass("hidden");
            $(".page_content").css("overflow-y", "scroll");
        }
        if ($('#ddlSearchElements').val() == "0") {
            $("#divUAEnw").addClass("hidden");
            $("#divSearchbtn").addClass("hidden");
            $("#divDataAddressDetails").addClass("hidden");
            $("#divInterNW").addClass("hidden");
            $("#divDataProviderDetails").addClass("hidden");
            $("#divINDnw").addClass("hidden");
            $("#divDataIndNw").addClass("hidden");
            $("#divGCCnw").addClass("hidden");
            $("#divDataGCC").addClass("hidden");
            $(".page_content").css("overflow-y", "unset");
        }

    });
    $('#btnSearchProvider').click(function () {
        if ($('#ddlSearchElements').val() == "UAE") {
            $("#divUAEnw").removeClass("hidden");
            $("#divSearchbtn").removeClass("hidden");
            $("#divDataAddressDetails").removeClass("hidden");
            $("#divInterNW").addClass("hidden");
            $("#divDataProviderDetails").addClass("hidden");
            $("#divINDnw").addClass("hidden");
            $("#divDataIndNw").addClass("hidden");
            $("#divGCCnw").addClass("hidden");
            $("#divDataGCC").addClass("hidden");
        }
        else if ($('#ddlSearchElements').val() == "INT") {

            $("#divSearchbtn").removeClass("hidden");
            $("#divInterNW").removeClass("hidden");
            $("#divDataAddressDetails").addClass("hidden");
            $("#divUAEnw").addClass("hidden");
            $("#divDataProviderDetails").removeClass("hidden");
            $("#divINDnw").addClass("hidden");
            $("#divDataIndNw").addClass("hidden");
            $("#divGCCnw").addClass("hidden");
            $("#divDataGCC").addClass("hidden");
        }
        else if ($('#ddlSearchElements').val() == "IND") {
            $("#divINDnw").removeClass("hidden");
            $("#divSearchbtn").removeClass("hidden");
            $("#divDataAddressDetails").addClass("hidden");
            $("#divInterNW").addClass("hidden");
            $("#divDataProviderDetails").addClass("hidden");
            $("#divUAEnw").addClass("hidden");
            $("#divDataIndNw").removeClass("hidden");
            $("#divGCCnw").addClass("hidden");
            $("#divDataGCC").addClass("hidden");
        }
        else if ($('#ddlSearchElements').val() == "GCC") {
            $("#divGCCnw").removeClass("hidden");
            $("#divSearchbtn").removeClass("hidden");
            $("#divDataAddressDetails").addClass("hidden");
            $("#divInterNW").addClass("hidden");
            $("#divDataProviderDetails").addClass("hidden");
            $("#divUAEnw").addClass("hidden");
            $("#divDataIndNw").addClass("hidden");
            $("#divINDnw").addClass("hidden");
            $("#divDataGCC").removeClass("hidden");
        }
    });
});