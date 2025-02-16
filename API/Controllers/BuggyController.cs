using System;
using API.DTOs;
using core.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController : BaseApiController
{
    [HttpGet("unauthorized")]
    public IActionResult GetUnauthorized(){
        return Unauthorized();
    }
    [HttpGet("badrequest")]
    public IActionResult GetBadRequest(){
        return BadRequest();
    }
    [HttpPost("validationerror")]
    public IActionResult GetValidationError(CreateProductDto product){
       return Ok();
    }
    [HttpGet("internalerror")]
    public IActionResult GetInternalError(){
       throw new Exception("This is a test Exception");
    }

}
