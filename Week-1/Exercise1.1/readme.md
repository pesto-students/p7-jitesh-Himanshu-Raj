# Week1 Exercise1.1

In this section, we will see what happens in the background, step by step when we type any URL in the browser and how does the browser fetch the desired result.

## When a user enters an URL in the browser, how does the browser fetch the desired result ?

<img src="https://data-flair.training/blogs/wp-content/uploads/sites/2/2021/04/image0112.jpg" width="600" height="400">

### 1. You enter the URL in the browser.

Suppose you want to visit the website of Google. So you type www.google.com in the address bar of your browser. When you type any URL you basically want to reach the server where the website is hosted.

### 2. The browser looks for the IP address of the domain name in the DNS(Domain Name Server).

DNS is a list of URLs and their corresponding IP address just like the telephone book has phone numbers corresponding to the names of the people. We can access the website directly by typing the IP address but imagine remembering a group of numbers to visit any website. So, we only remember the name of the website and the mapping of the name with the IP address is done by the DNS.

The DNS checks at the following places for the IP address.

- Check Browser Cache.
- Check OS Cache.
- Router Cache.
- ISP(Internet Service Provider) Cache.

So, the domain name which you entered got converted into a DNS number. Suppose the above-entered domain name www.google.com has an IP address 100.95.224.1. So, if we type https://100.95.224.1 in the browser we can reach the website.

### 3. The Browser initiates a TCP connection with the server.

When the browser receives the IP address, it will build a connection between the browser and the server using the internet protocol. The most common protocol used is TCP protocol. The connection is established using a three-way handshake. It is a three-step process.

- Step 1 (SYN): As the client wants to establish a connection so it sends an SYN(Synchronize Sequence Number) to the server which informs the server that the client wants to start a communication.
- Step 2 (SYN + ACK): If the server is ready to accept connections and has open ports then it acknowledges the packet sent by the server with the SYN-ACK packet.
- Step 3 (ACK): In the last step, the client acknowledges the response of the server by sending an ACK packet. Hence, a reliable connection is established and data transmission can start now.

### 4. The browser sends an HTTP request to the server.

The browser sends a GET request to the server asking for www.google.com webpage. It will also send the cookies that the browser has for this domain. Cookies are designed for websites to remember stateful information (items in the shopping cart or wishlist for a website like Amazon) or to record the user’s browsing history etc. It also has additional information like request header fields(User-Agent) for that allows the client to pass information about the request, and about the client itself, to the server. Other header fields like the Accept-Language header tells the server which language the client is able to understand. All these header fields are added together to form an HTTP request.

Sample Example of HTTP Request: Now let’s put it all together to form an HTTP request. The HTTP request below will fetch abc.html page from the web server running on www.google.com

```bash
GET /abc.htm HTTP/1.1
User-Agent: Mozilla/4.0 (compatible; MSIE5.01; Windows NT)
Host: www.google.com
Accept-Language: en-us
Accept-Encoding: gzip, deflate
Connection: Keep-Alive
```

<img src="https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/what-happens-when-you-type-a-url-in-the-web-browser-request-response-f68c0cb95019db02.jpg" width="500" height="300">

### 5. The server handles the incoming request and sends an HTTP response.

The server handles the HTTP request and sends a response. The first line is called the status line. A Status-Line consists of the protocol version(e.g HTTP/1.1) followed by numeric status code(e.g 200)and its associated textual phrase(e.g OK). The status code is important as it contains the status of the response.

- 1xx: Informational: It means the request was received and the process is continuing.
- 2xx: Success: It means the action was successful.
- 3xx: Redirection: It means further action must be taken in order to complete the request. It may redirect the client to some other URL.
- 4xx: Client Error: It means some sort of error in the client’s part.
- 5xx: Server Error: It means there is some error on the server-side.

Sample Example of HTTP Response: Now let’s put it all together to form an HTTP response for a request to fetch the abc.htm page from the web server running on www.google.com.

```bash
HTTP/1.1 200 OK
Date: Tue, 28 Jan 2020 12:28:53 GMT
Server: Apache/2.2.14 (Win32)
Last-Modified: Wed, 22 Jul 2022 19:15:56 GMT
Content-Length: 88
Content-Type: text/html
Connection: Closed
```

### 6. The browser displays the HTML content.

Now the browser gets the response and the HTML web page is rendered in phases. First, it gets the HTML structure and then it sends multiple GET requests to get the embedded links, images, CSS, javascript files, etc and other stuff. The web page will be rendered and in this case, the www.google.com web page will be displayed.
All these steps happen each time we enter any URL. All these processes happen in the background and within milliseconds.

## Some of the key-points.

### High Level Components of a browser.

- User Interface: It is an environment allowing users to use certain features like search bar, refresh button, menu, bookmarks, etc.
- Browser Engine: The bridge connects the interface and the engine. It monitors the rendition engine while manipulating the inputs coming from multiple user interfaces.
- Networking: The protocol provides an URL and manages all sorts of safety, privacy and communication.
  In addition, the store network traffic gets saved in retrieved documents.
- Data Storage: The cookies store information as the data store is an uniform layer that the browsers use. Storage processes like IndexedDB, WebSQL, localStorage, etc works well on browsers.
- JavaScript Interpreter: It allows conversion of JavaScript code in a document and the executes it. Then the engine shows the translation on the screen to the users.

### Rendering engine and its use.

A rendering engine is software that draws text and images on the screen. The engine draws structured text from a document (often HTML), and formats it properly based on the given style declarations (often given in CSS). Examples of layout engines: Blink, Gecko, EdgeHTML, WebKit.

### Parsers (HTML, CSS, etc)

- So we have HTML content at the beginning which goes through a process called tokenization, tokenization is a common process in almost every programming language where code is split into several tokens which are easier to understand while parsing. This is where the HTML's parser understands which is the start and which is the end of the tag, which tag it is and what is inside the tag.
  Now we know, html tag starts at the top and then the head tag starts before the html ends so we can figure out that the head is inside html and create a tree out of it. Thus we then get something called a parse tree which eventually becomes a DOM tree.
- Just like HTML, CSS goes through a similar process where we have the CSS text and then the tokenization of CSS to eventually create something called a CSSOM or CSS Object Model.
- For rendering, a DOM and CSSOM are merged to form something called a Render Tree. Render Tree has the information required to mark and paint elements on the screen.
- Also while forming a Render Tree, elements like head, link, script, and elements with 'display: none' in CSS are ignored since they are not rendered on the screen.

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--uJ44oL2X--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/s0cj1gr1srugpkc34985.png" width="600" height="400">

### Order of script processing

- If you aren't dynamically loading scripts or marking them as defer or async, then scripts are loaded in the order encountered in the page. It doesn't matter whether it's an external script or an inline script - they are executed in the order they are encountered in the page. Inline scripts that come after external scripts are held until all external scripts that came before them have loaded and run.
- Async scripts (regardless of how they are specified as async) load and run in an unpredictable order. The browser loads them in parallel and it is free to run them in whatever order it wants.
- A script tag with defer waits until the entire parser is done and then runs all scripts marked with defer in the order they were encountered. This allows you to mark several scripts that depend upon one another as defer. They will all get postponed until after the document parser is done, but they will execute in the order they were encountered preserving their dependencies.

### Layout and Painting

- The layout is where the elements are marked on the screen. The layout includes all the calculations and mathematics behind an element's position so it takes all the properties related to the position (height, width, position, top left right bottom, etc) from The Render Tree and places the elements on the screen.
- After Layout, a Paint happens. Paint takes properties like color, background-color, border-color, box-shadow, etc. to paint the screen with colors.
  After the paint, we see the content on the screen and the first time we see something other than a white screen is called 'First Paint'. The term First Paint is used in performance reports to show how long your website took to show something on the screen.
