using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SethBlog.Startup))]
namespace SethBlog
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
