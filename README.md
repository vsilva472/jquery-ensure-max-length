# jQuery Ensure Max Length
A simple, easy to use and customizable jquery plugin to limit chatacters inside input or textarea fields.
See [DEMO](http://vsilva472.github.io/jquery-ensure-max-length) in action.


 ## Default options
 The default pluigin options are:
  ```
    <script type="text/javascript">
        (function ( $ ) {
            // this is the same of $( 'table' ).TableSorter();
            $( '#my-field' ).EnsureMaxLength(
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
* Add jquery ensure max length file to your page **after jquery core**:
```
    <script src="path_to_jquery/jquery.min.js"></script>
    <script src="path_to_plugin/jquery-ensure-max-length.js"></script>
 ```
2. After import jquery ensure max length just call the plugin api:
 ```
    <script type="text/javascript">
        (function ( $ ) {
            $( '#field-selector' ).EnsureMaxLength();
        } ( jQuery ));
    </script>
 ```
 
### Changing default max chars
This plungin even works with textareas! .The folowing sample illustrates how to change the default max chars from 100 to 250
 ```
    <script type="text/javascript">
        (function ( $ ) {
            $( '#sample2' ).EnsureMaxLength({
		       limit: 250
            });
        } ( jQuery ));
    </script>
 ```
 ### Adding css classes
jQuery Ensure Max Legth allow you to add css class to customize counter. The classes must be inserted as string separate by a space.
 ```
    /**
     * Add css classes
     */
    <script type="text/javascript">
        (function ( $ ) {
            $( '#sample2' ).EnsureMaxLength({
                 cssClass: 'class1 class2 class3'
            });
        } ( jQuery ));
    </script>
 ```
 ### Changing separator
You can also changing the separator / to wherever symbol or word you want. In this sample a are changing the "/" to " of ".
 ```
    /**
     * Changing separator
     */
    <script type="text/javascript">
        (function ( $ ) {
            $( '#sample2' ).EnsureMaxLength({
                 separator: ' of '
            });
        } ( jQuery ));
    </script>
 ```
 
 ### Specifying where to append the counter element
 The use of 'placement' is optional and if you want to use it, you must pass a valid jquery selector to explicit tell to plugin where to append the counter element. [See sample5](https://vsilva472.github.io/jquery-ensure-max-length#placement/)
 
 ```
    <script type="text/javascript">
        (function ( $ ) {
            $( '#sample2' ).EnsureMaxLength({
                 placement: '#counter-container'
            });
        } ( jQuery ));
    </script>
 ```
 
 ### Changelog

1.0.0 - 2018-12-02
* Initial Commit
 
 #### License
 MIT