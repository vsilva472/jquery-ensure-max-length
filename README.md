# jQuery Ensure Max Length
A simple, easy to use and customizable jquery plugin to limit characteres inside input or textarea fields.
See [DEMO](http://vsilva472.github.io/jquery-ensure-max-length) in action.


 ## Default options
 The default plugin options are:
  ```
    <script type="text/javascript">
        (function ( $ ) {
            // this is the same of $( 'table' ).EnsureMaxLength();
            $( '#field-selector' ).EnsureMaxLength(
                { 
                    limit: 100,
                    cssClass: '',
                    separator: '/',
                    placement: null
                }
            );
        } ( jQuery ));
    </script>
 ```

## Basic usage
* Add jQuery Ensure Max Length file to your page **after jquery core**:
```
    <script src="path_to_jquery/jquery.min.js"></script>
    <script src="path_to_plugin/jquery-ensure-max-length.js"></script>
 ```
2. After import jQuery Ensure Max Length just call the plugin api:
 ```
    <script type="text/javascript">
        (function ( $ ) {
            $( '#field-selector' ).EnsureMaxLength();
        } ( jQuery ));
    </script>
 ```
 
### Changing default max chars
This plugin even works with textareas. The folowing sample illustrates how to change the default max chars from 100 to 250
 ```
    <script type="text/javascript">
        (function ( $ ) {
            $( '#field-selector' ).EnsureMaxLength({
		       limit: 250
            });
        } ( jQuery ));
    </script>
 ```
 ### Adding css classes
jQuery Ensure Max Length allow you to add css classes to customize counter element. The classes must be inserted as string separate by a space.
 ```
    /**
     * Add css classes
     */
    <script type="text/javascript">
        (function ( $ ) {
            $( '#field-selector' ).EnsureMaxLength({
                 cssClass: 'class1 class2 class3'
            });
        } ( jQuery ));
    </script>
 ```
 ### Changing separator
You can also change the separator `/` to wherever symbol or word you want. In this sample a are changing the `/` to ` of `.
 ```
    /**
     * Changing separator
     */
    <script type="text/javascript">
        (function ( $ ) {
            $( '#field-selector' ).EnsureMaxLength({
                 separator: ' of '
            });
        } ( jQuery ));
    </script>
 ```
 
 ### Specifying where to append the counter element
 The use of 'placement' is optional and if you want to use it, you must pass a valid jQuery selector to explicit tell to plugin where to append the counter element. [See sample5](https://vsilva472.github.io/jquery-ensure-max-length/#placement)
 
 ```
    <script type="text/javascript">
        (function ( $ ) {
            $( '#field-selector' ).EnsureMaxLength({
                 placement: '#counter-container'
            });
        } ( jQuery ));
    </script>
 ```
 
 ### Changelog

1.0.1 - 2019-04-12
* Fix #4 Maxlength
 
1.0.0 - 2018-12-02
* Initial Commit

### Donation
Help me to improve this project sending me some **HTMLCOIN**  
Wallet: **[HqgaiK6T1o2JP4p3p34CZp2g3XnSsSdCXp](htmlcoin:HqgaiK6T1o2JP4p3p34CZp2g3XnSsSdCXp?label=Doa%C3%A7%C3%B5es%20Github)**  
  
![Doar HTMLCoin](https://www.viniciusdesouza.com.br/img/htmlcoin.png)
 
 #### License
 MIT
