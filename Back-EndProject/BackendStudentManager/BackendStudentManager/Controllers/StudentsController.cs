using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using BackendStudentManager.Models;
using Newtonsoft.Json.Linq;

namespace BackendStudentManager.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class StudentsController : ApiController
    {
        public static List<Student> SavedStudents = new List<Student>
        {
            new Student{ID=1,name="John", age=20},
            new Student{ID=2,name="Bob", age=18},
            new Student{ID=3,name="Steve", age=23}
        };
        // GET: api/Students
        public IEnumerable<Student> Get()
        {
            return SavedStudents.AsEnumerable();
        }

        // GET api/values/5
        public IHttpActionResult Get(int id)
        {
            System.Diagnostics.Debug.WriteLine("Recieved GET");
            Student foundStudent = SavedStudents.Find(student => student.ID == id);
            if (foundStudent == null)
            {
                return NotFound();
            }
            return Ok(foundStudent);
        }

        // POST: api/Students
        public void Post(object student)
        {
            JObject jstudent = student as JObject;
            Student realStudent = jstudent.ToObject<Student>();
            System.Diagnostics.Debug.WriteLine("Recieved Student: " + realStudent.name);
            realStudent.ID = SavedStudents.Count + 1;
            SavedStudents.Add(realStudent);
        }

        // PUT: api/Students/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Students/5
        public void Delete(int id)
        {
        }
    }
}
