package net.GreenQR.Backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/test")
public class Communicator
{
    /*
     * 
     
    @Autowired
    private ProductUtility utility;

    @GetMapping
    public ResponseEntity<List<Product>> getItem()
    {
        return new ResponseEntity<List<Product>>(utility.getItems(), HttpStatus.OK);
    }
    */
    @GetMapping
    public String testing()
    {
        return "this actually runs";
    }
}