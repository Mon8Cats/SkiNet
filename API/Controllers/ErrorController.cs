using API.Errors;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("errors/{code}")]
    [ApiExplorerSettings(IgnoreApi=true)]
    public class ErrorController : BaseApiController
    {
        /*
        [HttpGet][HttpPost][HttpPut][HttpDelete][HttpHead][HttpPatch][HttpOptions]
        */
        public IActionResult Error(int code)
        {
            return new ObjectResult(new ApiResponse(code));
        }
    }
}