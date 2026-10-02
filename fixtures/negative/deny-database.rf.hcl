policy "deny-database" {
  target {
    concept = rf.concept.managed-database
  }
  assert = false
  message = "Synthetic negative qualification policy."
}
