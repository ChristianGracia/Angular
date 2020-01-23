package com.cg.cgws.todo;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoResources {
	
	@Autowired
	private TodoHardCodedService todoService;
	
	@GetMapping(path="/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoService.findAll();
		
	}
	
	@GetMapping(path="/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username,@PathVariable long id){
		return todoService.findById(id);
	}
	
	
	@DeleteMapping(path="/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
		Todo todo = todoService.deleteById(id);
		if(todo != null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	
	}

}
