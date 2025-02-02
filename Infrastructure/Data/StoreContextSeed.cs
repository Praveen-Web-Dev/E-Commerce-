using System;
using System.Text.Json;
using core.Entities;

namespace Infrastructure.Data;

public class StoreContextSeed
{
    public static async Task seedAsync(StoreContext context){
        if(!context.Products.Any()){
            var productData = await File.ReadAllTextAsync("../Infrastructure/Data/SeedData/products.json");
            var products = JsonSerializer.Deserialize<List<Product>>(productData);

            if(products==null) return;
            context.Products.AddRange(products);
            await context.SaveChangesAsync();

        }
    }

}
