using System.ComponentModel.DataAnnotations;
namespace SkillsApi
{
    public class Skill
    {
        public int id { get; set; }
        
        [RequiredAttribute, MinLength(4)]
        public string name { get; set; }
    }
}
