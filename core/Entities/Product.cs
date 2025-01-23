using System;
using System.ComponentModel.DataAnnotations;

namespace core.Entities;

public class Product : BaseEntity
{
    public required string Name { get; set; } 
    public required string Description { get; set; }
    public required decimal Price { get; set; }
    public required string PictureUrl { get; set; }
    public required string Type { get; set; }
    public required string Brand { get; set; }
    public int QuantityInStock { get; set; }
}
