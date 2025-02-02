using System;
using core.Entities;

namespace core.Specifications;

public class TypeListSpecification : BaseSpecification<Product,string>
{
    public TypeListSpecification()
    {
        AddSelect(x=>x.Type);
        ApplyDistinct();
    }
}
