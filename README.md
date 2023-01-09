# Notify #

Introducing notify to display popup notification on your web page.

### How do I get set up? ###

* Include css and js on your web page
    * ```<link href="css/notify.css" rel="stylesheet">```
    * ```<script src="css/notify.js">```
* Configuration
    * In Your js file setup notify
    * `notify.setup()`
    * To define options
      ```javascript
        notify.setup({
            title: true,
            icon: true,
            html: '{your-html}',
            timeout: '{notify-timeout}',
            position: '{position}'
        })
        ```
      Options:
      ```
        | Option  | type    | Default      | Description                                                                                                              |
        |---------|---------|--------------|--------------------------------------------------------------------------------------------------------------------------|
        | title   | boolean | True         | This will be a default title based on notification. you can remove it by setting option to false                         |
        | icon    | boolean | True         | This will be a default icon based on notification. you can remove it by setting option to false                          |
        | type    | string  | info         | you can use type options to display different notification.                                                              |
        | html    | string  | default-html | This will be custom html for your notification you need to add a class ```notify__message``` in your html do add message |
        | timeout | int     | 4000         | This is be timeout for notification to disappear                                                                         |
      ```
      Type Options: You can use any of the option from array to display a specific type of notifications
      ```
      'danger': ['danger', 'error'],
      'info': ['information', 'info', 'message'],
      'success': ['success'],
      'warning': ['warning'],
      'notice': ['notice']
      ```
* Display Message
  `notify.show(type, message)`
    * Examples:
      ```
      notify.show(danger,'This is error message')
      notify.show('success', 'This is success message')
      notify.show('error', 'This is error message')
      notify.show('warning', 'This is warning message')
      notify.show('info', 'This is info message')
      notify.show('notice', 'This is notice message')
      ```
      ![alt text](./demo/images/demo.png "Title")

      To change html to custom you need some classes for div to interact with notify, you can optionality use these but
      for message, class is required to display notify message
      ```
      Uses:                   Class Name
      For Message             notify__message         This will be your notify message
      For Icon                notify__icon            This will be defualt icon based on type
      For Title               notify__title           This will be default title based on type
      ```


* There is no dependency unless you need to customize your custom html in notify

### Contribution guidelines ###

* If you wish to update any info or need to change readme please feel free to raise PR
* Once review, it will be updated.

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact