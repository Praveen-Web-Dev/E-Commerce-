using System;

namespace API.Errors;

public class ApiErrorResponse(int status, string message, string? details)
{
    public int Status { get; set; } = status;
    public string Message { get; set; } = message;
    public string? Details { get; set; } = details;
}
