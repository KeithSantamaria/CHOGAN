package com.example.userservice.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;

/**\
 * @ClassName User
 *
 * @Purpose The following class is a POJO that is used to store the users as documents in our mongoDb
 *
 * @Params
 * 				String id: Unique id used for MongoDb
 * 			  String email: The username of the user. Should be Unique. Required
 * 				String password: Used to authenticate the user. They must input password to log in as user. Salted. Required
 * 				String firstName: Optional detail that lists that first name of user.
 * 				String lastName: Optional detail that lists the last name
 * 			  Int securityQuestionId: The id for the security question. We have a total of 4. should be between 1-4. Required
 *				String securityAnswer: The answer the user selected to the chosen security question. Salted. Required.

 */

@Data
@Document(collection = "users")
public class User {

	@Id
	String id;
	String password; // salted
	@NotEmpty
	@Indexed(unique = true)
	String email;
	String firstName;
	String lastName;
	@Positive
	@Min(value = 1, message = "Rating must be greater than 0")
	@Max(value = 4, message = "Rating must be less than 5")
	@NotEmpty
	int securityQuestionId;
	@NotEmpty
	String securityAnswer; //salted
	//profile picture
}
