// JavaScript Document
 'use strict';
 $(document).ready(function(){
	 if($().select2) {
    $('.select2').select2({
      minimumResultsForSearch: Infinity,
      placeholder: 'Elija una',
	  width: '100%'

    });

    // Select2 by showing the search
    $('.select2-show-search').select2({
      minimumResultsForSearch: ''
    });

    // Select2 with tagging support
    $('.select2-tag').select2({
      tags: true,
      tokenSeparators: [',', ' ']
    });
  };
	 $('#tprocedimiento').bootstrapToggle({
      on: 'Sumario',
      off: 'Ordinario',
	  width: '100%',
      onstyle: 'primary'
    });
	 $('.fc-datepicker').datepicker({
          showOtherMonths: true,
          selectOtherMonths: true
        });
	 $('#datatable2').DataTable({
		           responsive: true,
		 bLengthChange: false,
          language: {
            searchPlaceholder: 'Buscar...',
            sSearch: '',
            }
		 ,
           autoWidth: false
        });
	  $('#datecomunicacionmask').mask('99/99/9999');
	 $('#dateregistromask').mask('99/99/9999');
	 $('#datehtmask').mask('99/99/9999');
	  $('#nrohtmask').mask('9999999999?-*');
	 
 });