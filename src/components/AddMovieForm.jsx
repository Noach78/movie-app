import { useState } from "react";

function validate(form) {
  const errors = {};
  const rating = Number(form.rating);

  if (!form.title.trim()) {
    errors.title = "Le titre est obligatoire.";
  }

  if (
    form.rating === "" ||
    !Number.isFinite(rating) ||
    rating < 0 ||
    rating > 10
  ) {
    errors.rating = "La note doit être comprise entre 0 et 10.";
  }

  return errors;
}

export default function AddMovieForm({ onAdd }) {
  const [form, setForm] = useState({ title: "", rating: "" });
  const [submitted, setSubmitted] = useState(false);
  const errors = validate(form);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);

    if (Object.keys(errors).length > 0) {
      return;
    }

    onAdd({
      id: crypto.randomUUID(),
      title: form.title.trim(),
      rating: Number(form.rating),
    });
    setForm({ title: "", rating: "" });
    setSubmitted(false);
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <h3>Ajouter un film</h3>
      <label htmlFor="movie-title">Titre</label>
      <input
        id="movie-title"
        name="title"
        type="text"
        value={form.title}
        onChange={handleChange}
        aria-invalid={submitted && Boolean(errors.title)}
        aria-describedby={
          submitted && errors.title ? "movie-title-error" : undefined
        }
      />
      {submitted && errors.title && (
        <p className="form-error" id="movie-title-error">
          {errors.title}
        </p>
      )}

      <label htmlFor="movie-rating">Note (de 0 à 10)</label>
      <input
        id="movie-rating"
        name="rating"
        type="number"
        min="0"
        max="10"
        step="any"
        value={form.rating}
        onChange={handleChange}
        aria-invalid={submitted && Boolean(errors.rating)}
        aria-describedby={
          submitted && errors.rating ? "movie-rating-error" : undefined
        }
      />
      {submitted && errors.rating && (
        <p className="form-error" id="movie-rating-error">
          {errors.rating}
        </p>
      )}

      <button className="btn" type="submit">
        Ajouter
      </button>
    </form>
  );
}
