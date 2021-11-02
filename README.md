# Guvi-Assignment - 1
--------
 HTTP  
--------
Hypertext Transfer Protocol (HTTP) is an application protocol that is, currently, the foundation of data communication for the World Wide Web.

HTTP is based on the Client/Server model. Client/Server model can be explained as two computers, Client (receiver of service) and Server (provider of service) that are communicating via requests and responses.
A simple and abstract example would be a restaurant guest and a waiter. The guest (Client) asks (sends request) waiter (Server) for a meal, then the waiter gets the meal from the restaurant chef (your application logic) and brings the meal to the guest.

Since, we all know HTTP is protocol that is widely used over internet, HTTP 1.1 has turned into a protocol used for virtually everything on the Internet. HTTP 1.1 version came to picture in 1997, since then the protocol was unchanged, but IETF(Internet Engineering Task Force) revised the protcol and released a newer version of HTTP i.e. HTTP 2.0 in the year 2015.

HTTP 1.1 **practically** only allows one outstanding request per TCP connection. But with HTTP 2.0 we can have multiple request at a time.

  ### Differece between HTTP1.1 vs HTTP2. 
---------------------------------------
![This is an Image](https://img-medianova.mncdn.com/wp-content/uploads/sites/8/2018/12/http3.png)
### Year
- HTTP1.1--> 1997	          
- HTTP2  -->2015


### Key Features 

- HTTP1.1        
          
     It supports connection reuse i.e. for every TCP connection there could be multiple requests and responses, and pipelining where the client can request several resources from the server at once. However, pipelining was hard to implement due to issues such as head-of-line blocking and was not a feasible solution.

- HTTP2
       
     Uses multiplexing, where over a single TCP connection resources to be delivered are interleaved and arrive at the client almost at the same time. It is done using streams which can be prioritized, can have dependencies and individual flow control. It also provides a feature called server push that allows the server to send data that the client will need but has not yet requested.


### Status Code 

- HTTP1.1. 

     Introduces a warning header field to carry additional information about the status of a message. Can define 24 status codes, error reporting is quicker and more efficient.
      
- HTTP2
    
    Underlying semantics of HTTP such as headers, status codes remains the same.
      
### Authentication Mechanism

- HTTP1.1

     It is relatively secure since it uses digest authentication, NTLM authentication.
      
-  HTTP2
     
     Security concerns from previous versions will continue to be seen in HTTP/2. However, it is better equipped to deal with them due to new TLS features like connection error of type Inadequate_Security.
        
 ### Caching
 
- HTTP1.1

     Expands on the caching support by using additional headers like cache-control, conditional headers like If-Match and by using entity tags.
          
- HTTP2
     
     HTTP/2 does not change much in terms of caching. With the server push feature if the client finds the resources are already present in the cache, it can cancel the pushed stream.
       

### Web Traffic

- HTTP1.1
    
    HTTP/1.1 provides faster delivery of web pages and reduces web traffic as compared to HTTP/1.0. However, TCP starts slowly and with domain sharding (resources can be downloaded simultaneously by using multiple domains), connection reuse and pipelining, there is an increased risk of network congestion.
          
- HTTP2  
    
    HTTP/2 utilizes multiplexing and server push to effectively reduce the page load time by a greater margin along with being less sensitive to network delays.
          
          
          
          
          
## CONCLUSION: 

HTTP2 is much faster and more reliable than HTTP1. HTTP1 loads a single request for every TCP connection, while HTTP2 avoids network delay by using multiplexing. HTTP is a network delay sensitive protocol in the sense that if there is less network delay, then the page loads faster.          
        



