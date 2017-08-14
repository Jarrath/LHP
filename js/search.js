    $('#catalogue').click(function(e){
        e.preventDefault();
        var url = $('#ebscohostsearchtext').val();
        window.location = 'https://encore.deakin.edu.au/iii/encore/search/C__S' + encodeURI(url) + '__Orightresult__U?lang=eng';
    });

    $('#google').click(function(e){
        e.preventDefault();
        if($('#ebscohostsearchtext').val()!=""){
            var url = $('#ebscohostsearchtext').val();
            window.location = 'https://scholar.google.com.au/scholar?inst=7790070097503134188&q=' + encodeURI(url);
        }
        else{
            window.location = 'http://www.deakin.edu.au/library/google-scholar';
        }
    });

    $('#databases').click(function(e){
        e.preventDefault();
        var url = $('#ebscohostsearchtext').val();
        window.location = 'http://www.deakin.edu.au/library/a-z/databases?q=' + encodeURI(url) + '&subject=&s=Search';
    });

    $('#journals').click(function(e){
        e.preventDefault();
        if($('#ebscohostsearchtext').val()!=""){
            var url = $('#ebscohostsearchtext').val();
            window.location = 'http://ux3as3nu6z.search.serialssolutions.com/ejp/?libHash=UX3AS3NU6Z#/search/?searchControl=title&searchType=title_contains&criteria=' + encodeURI(url) + '&language=en-US&titleType=JOURNALS';
        }
        else{
            window.location = 'https://www.deakin.edu.au/library/a-z/journals';
        }
    });

