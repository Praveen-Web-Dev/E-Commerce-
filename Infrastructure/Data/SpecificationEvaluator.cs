using System;
using core.Entities;
using core.Interfaces;

namespace Infrastructure.Data;

public class SpecificationEvaluator<T> where T : BaseEntity
{
    public static IQueryable<T> GetQuery(IQueryable<T> query, ISpecification<T> spec){
        if(spec.Criteria != null){
            query = query.Where(spec.Criteria); // x => x.Brand == brand

        }

        if(spec.Order!=null){
            query = query.OrderBy(spec.Order);
        }

        if(spec.OrderByDescending!=null){
            query = query.OrderByDescending(spec.OrderByDescending);
        }

        if(spec.IsDistinct){
            query = query.Distinct();
        }

        return query;
    }


    public static IQueryable<TResult> GetQuery<TSpec,TResult>(IQueryable<T> query,
     ISpecification<T, TResult> spec){
        if(spec.Criteria != null){
            query = query.Where(spec.Criteria); // x => x.Brand == brand

        }

        if(spec.Order!=null){
            query = query.OrderBy(spec.Order);
        }

        if(spec.OrderByDescending!=null){
            query = query.OrderByDescending(spec.OrderByDescending);
        }


        var selectQuery = query as IQueryable<TResult>;
        if(spec.Select !=null){
            selectQuery = query.Select(spec.Select);
        }

        if(spec.IsDistinct){
            selectQuery = selectQuery?.Distinct();
        }

        return selectQuery ?? query.Cast<TResult>();
    }
}
