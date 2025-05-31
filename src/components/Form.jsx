import { useForm } from 'react-hook-form';

export default function Form() {
    const errorMessage = "To pole jest wymagane!";

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log('Form data submitted:', data);
        
        const backendUrl = import.meta.env.VITE_BackendUrl || `http://localhost:${import.meta.env.VITE_BackendPort || 3000}`;
        
        fetch(`${backendUrl}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            alert('Formularz został wysłany pomyślnie!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Wystąpił błąd podczas wysyłania formularza.');
        });
    };
    console.log(errors);


    return (
        <div className="form-container">
            <h2>Formularz Kontaktowy</h2>
            <p>
                Masz pytania lub potrzebujesz wsparcia? Wypełnij formularz, a my skontaktujemy się z Tobą jak najszybciej.
            </p>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Autor</label>
                <input type="email" placeholder="Twój email" {...register("author", {required: true})} />
                {errors.author && <span className="error-message">{errorMessage}</span>}
                <label htmlFor="title">Tytuł</label>
                <input type="text" placeholder="Tytuł" {...register("title", {required: true})} />
                {errors.title && <span className="error-message">{errorMessage}</span>}
                <label htmlFor="message">Treść</label>
                <textarea 
                  id="message" 
                  placeholder="Twoja wiadomość..." 
                  {...register("message", {required: true})} 
                  cols="75" 
                  rows="20"
                ></textarea>
                {errors.message && <span className="error-message">{errorMessage}</span>}
                
                <button type="submit">Prześlij</button>
            </form>
        </div>
    )
}