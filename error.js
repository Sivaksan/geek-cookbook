
<div class='search404-container'>
    <div class='search404'>
        <i class="icon-search"></i>
            <input id='search404' placeholder='Search the documentation …'>
        <a href='#' class='search404-close'><i class="icon-remove-sign"></i></a>
    </div>
</div>

<script type="text/javascript" src="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js"></script>
<script type="text/javascript">
docsearch({
  apiKey: '{{ site.algolia.api_key }}',
  indexName: 'home-assistant',
  inputSelector: '#search404',
  debug: false // Set debug to true if you want to inspect the dropdown
});

document.querySelector('.search404-close').addEventListener('click', function(ev) {
  ev.preventDefault();
  document.querySelector('#search404').value = "";
});
</script>
