package net.GreenQR.Backend;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "items")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product
{
    @Id
    private String itemName;
    private String brandName;
    private String itemDesc;
    private int esgScore;

    private int EmployeeTreatment;
    private int Cruelty;
    private int Pollution;
}
